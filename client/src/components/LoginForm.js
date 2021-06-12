import React, { useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
// import axios from 'axios';
// import useUserObj from './hooks/useUserObj';

const LoginForm = (props) => {
  
  // const [ user, setUser ] = useUserObj();
  const [ state, setState ] = React.useState({ name: '', password: '' });
  // const [ switcher, setSwitcher ] = React.useState(true);
  
  // const setterFunction = (boolParam) => {
  //   if(boolParam) {
  //     setSwitcher(false);
  //   } else {
  //     setSwitcher(true);
  //   }
  // }

  useEffect(() => {
    // setUser(prev => prev.name = state.name);
  }, [props.setUser])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUser(prev => prev.name = state.name);
    // setterFunction(switcher);
  }
  
  const handleChange = (event) => {
    const value = event.target.value;
    // setState({
    //   ...state,
    //   [event.target.name]: value
    // });
    setState(prev => prev[event.target.name] = value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="nameField" label="Name" variant="outlined" margin="dense" name="name" value={state.sedwADuser} onChange={handleChange} />
      <TextField type="password" id="passwordField" label="Password" variant="outlined" margin="dense" name="password" value={state.password} onChange={handleChange} />
      <Button type="submit" variant="contained" color="secondary">Sign In</Button>
    </form>
  );
}

export default LoginForm