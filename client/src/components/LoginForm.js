import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

const LoginForm = () => {

  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');

  const [ state, setState ] = useState({
    name: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }
  console.log("This is the name state:", state.name);
  console.log("This is the password state:", state.password);
  return (
    <form onSubmit={handleSubmit}>
      <TextField id="nameField" label="Name" variant="outlined" margin="dense" name="name" value={state.name} onChange={handleChange} />
      <TextField type="password" id="passwordField" label="Password" variant="outlined" margin="dense" name="password" value={state.password} onChange={handleChange} />
      <Button type="submit" variant="contained" color="secondary">Sign In</Button>
    </form>
  );
}

export default LoginForm