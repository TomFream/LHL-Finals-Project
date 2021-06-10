import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     username: '',
  //     email: '',
  //     password: '',
  //     errors: ''
  //    };
  // }
[ name, setName ] = setState('');
[ password, setPassword ] = setState('');
[ errors, setErrors ] = setState('');

handleChange = (event) => {
    const {name, value} = event.target
    setName(value)
  };
handleSubmit = (event) => {
    event.preventDefault()
  };
render() {
    const {username, email, password} = this.statereturn (
      <div>
        <h1>Log In</h1>        
<form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />         
<button placeholder="submit" type="submit">
            Log In
          </button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </form>
      </div>
    );
  }
}
export default Login;