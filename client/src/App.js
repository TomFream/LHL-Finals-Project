import React, { Component, useState } from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

const App = () => {
  const [message, setMessage] = useState('Click the button to load data!')

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      setMessage(
        response.data.message

      );
    }) 
  }

    return (
      <div className="App">
      
      <Router>
        <Route path="/quiz" render={() => <h1>"Quiz 1"</h1>}/>
            <h1>{ message }</h1>
            <button onClick={fetchData} >
              Fetch Data
            </button>        
      </Router>
    </div>
    );

}

export default App;
