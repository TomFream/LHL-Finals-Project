import React, { useContext, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";


const LoginForm = () => {
  
  const [ user, setUser ] = useContext(UserContext)
  const [ state, setState ] = React.useState({ name: '', password: '' });

  useEffect(() => {
    const userTester = setTimeout(() => {
      console.log("this is user state from user tester:", user);
    }, 3500);
    return () => clearTimeout(userTester);
  }, [user])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({name: state.name});
    console.log(user.name);
  }

  const handleLogout = (event) => {

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
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <TextField id="nameField" label="Name" variant="outlined" margin="dense" name="name" value={state.name} onChange={handleChange} />
          <TextField type="password" id="passwordField" label="Password" variant="outlined" margin="dense" name="password" value={state.password} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Button type="submit" variant="contained" color="secondary">Sign In</Button>
          <Link to="/" >
            <Button variant="outlined" color="primary">
              Homepage
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm