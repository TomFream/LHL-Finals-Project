import React, { Component, useState } from "react";
import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import Main from "./components/Main";
// import Quiz from "./components/QuizAPIFetch(OLD)";
import User from "./components/User";
import Quiz from "./components/Quiz";
import NavBar from "./components/NavBar";

const App = () => {
  const [message, setMessage] = useState("Click the button to load data!");

  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        setMessage(response.data.message);
      });
  };

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route
            path="/quiz"
            render={() => (
               <div style={{
              display: 'flex',
               flexDirection: 'column',
               alignItems: 'center'}}>
                <Quiz />
                {/* <Quiz />  //Frontend Quiz Fetch// OUTDATED// */} 
                <h1>{message}</h1>
                <button onClick={fetchData}>Fetch Data</button>{" "}
                <User />
             </div>
            )}
          />
          <Route path="/" exact render={() => <Main />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
