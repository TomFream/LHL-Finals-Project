import React, { Component, useEffect, useState } from "react";
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
  const [questions, setQuestions] = useState(null)
  const [answers, setAnswers] = useState(null)
  useEffect(() => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        setQuestions(response.data.questions)
        setAnswers(response.data.answers)
      });
  }, [])

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route
            path="/quiz/:id"
            render={() => (
               <div style={{
              display: 'flex',
               flexDirection: 'column',
               alignItems: 'center'}}>
                <Quiz questions={questions} answers={answers}/>
                {/* <Quiz />  //Frontend Quiz Fetch// OUTDATED// */} 
                <h1>{message}</h1>
                <button >Fetch Data</button>{" "}
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
