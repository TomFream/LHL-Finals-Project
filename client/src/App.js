import React, { useEffect, useState } from "react";
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

const App = () => {
  // const [message, setMessage] = useState("Click the button to load data!");

  // console.log("answers & questions", answers, questions);

  return (
    <div className="App">
      <Router>
        <NavBar /> {/* Moved Route Logic Into NavBar Component */}
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
