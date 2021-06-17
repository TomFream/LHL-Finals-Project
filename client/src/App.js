import React, { useState } from "react";
// import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  // Route,
  // Switch,
  // Redirect,
} from "react-router-dom";
// import Main from "./components/Main";
// import Quiz from "./components/QuizAPIFetch(OLD)";
// import User from "./components/User";
// import Quiz from "./components/Quiz";
// import UserAccount from "./components/UserAccount";
import NavBar from "./components/NavBar";
// import { userContext } from "./components/hooks/userContext"
import { UserProvider } from "./components/UserContext";

const App = () => {
  // const [message, setMessage] = useState("Click the button to load data!");
  // const [ user, setUser ] = useState({});
  // console.log("answers & questions", answers, questions);
  // console.log("user context value:", user)
  return (
    <div className="App" style={{ backgroundColor: "#A3A3B0" }}>
      <Router>
        <UserProvider>
          <NavBar /> {/* Moved Route Logic Into NavBar Component */}
        </UserProvider>
        {/* <Switch>
          <Route
            path="/quiz/:id"
            render={() => (
               <div>
                <Quiz /> */}
        {/* <Quiz />  //Frontend Quiz Fetch// OUTDATED// */}
        {/* <h1>{message}</h1>
                <button >Fetch Data</button>{" "}
                <User />
             </div>
            )}
          />
          <Route path="/user/:id" render={() => <UserAccount />} />
          <Route path="/" exact render={() => <Main />} />
        </Switch> */}
      </Router>
    </div>
  );
};

export default App;
