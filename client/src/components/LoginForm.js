import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

const LoginForm = () => {
  
  const [ state, setState ] = useState({
    name: "",
    password: ""
  });

  // const [ user, setUser ] = useState({});

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/valid-user/${{name: state.name}}`)
  //   .then(response => {
  //     if (response.data) {
  //       // this.redirect()
  //       console.log(response.data)
  //       setUser({...response.data})
  //     }
  //   })
  //   .catch(error => console.log('api errors:', error))
  // }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    // setUser({ name: state.name });
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