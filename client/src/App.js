import React, { useEffect, useState } from "react";
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


const App = () => {
  const [message, setMessage] = useState("Click the button to load data!");

  // console.log("answers & questions", answers, questions);

  return (
    <div className="App">
      <Router>
        {/* <NavBar/> */}
        <Switch>
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
