import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
// import Main from "./components/Main";
// import Quiz from "./components/QuizAPIFetch(OLD)";
import User from "./components/User";
import Quiz from "./components/Quiz";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Main from "./components/Main";


const App = () => {
  const [ message, setMessage ] = useState("Click the button to load data!");
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ user, setUser ] = useState({});
  
  const handleLogin = (data) => {
    setUser({ user: data });
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setUser({});
    setIsLoggedIn(false);
  }

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})    
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
    .catch(error => console.log('api errors:', error))
  };

  return (
    <div className="App">
      <Router>
        {/* <NavBar/> */}
        <Switch>
          <Route exact path="api/login">
            <Login />
          </Route>
          <Route exact path="api/logout">
            <Main />
          </Route>
          <Route exact path="api/signup">
            <Signup />
          </Route>
          <Route
            path="/quiz/:id"
            render={() => (
               <div style={{
              display: 'flex',
               flexDirection: 'column',
               alignItems: 'center'}}>
                <Quiz />
                {/* <Quiz />  //Frontend Quiz Fetch// OUTDATED// */} 
                <h1>{message}</h1>
                <button >Fetch Data</button>{" "}
                <User />
             </div>
            )}
          />
          <Route path="/" exact render={() => <NavBar />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
