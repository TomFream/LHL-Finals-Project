import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

const LoginForm = () => {

  const loginStatus = () => {
    axios.post('http://localhost:3002/api/login', {...state})
    .then(response => {
      if (response.data) {
        // props.handleLogin(response.data)
        // this.redirect()
      } else {
        // this.setState({
        //   errors: response.data.errors
        // })
        // setErrors(response.data.errors);
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  const [ state, setState ] = useState({
    name: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="nameField" label="Name" variant="outlined" margin="dense" name="name" value={state.name} onChange={handleChange} />
      <TextField type="password" id="passwordField" label="Password" variant="outlined" margin="dense" name="password" value={state.password} onChange={handleChange} />
      <Button type="submit" variant="contained" color="secondary">Sign In</Button>
    </form>
  );
}

export default LoginForm