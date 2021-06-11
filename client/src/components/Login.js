import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

const [ name, setName ] = useState('');
const [ password, setPassword ] = useState('');
const [ errors, setErrors ] = useState('');

const handleChange = (event) => {
    const {name, value} = event.target
    setName(value)
  };
const handleSubmit = (event) => {
    event.preventDefault()
  };

return (
      <div>
        <h1>Log In</h1>        
          <form onSubmit={handleSubmit}>
            <input
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
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
export default Login;