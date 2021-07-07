import React from "react";
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/NavBar";
import { UserProvider } from "./components/UserContext";

const App = () => {
  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <Router>
        <UserProvider>
          <NavBar /> {/* Moved Route Logic Into NavBar Component */}
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
