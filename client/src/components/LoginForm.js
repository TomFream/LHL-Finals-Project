import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  
  const [ user, setUser ] = useContext(UserContext)
  const [ state, setState ] = React.useState({ name: '', password: '' });
  // const [ switcher, setSwitcher ] = React.useState(true);
  
  // const setterFunction = (boolParam) => {
  //   if(boolParam) {
  //     setSwitcher(false);
  //   } else {
  //     setSwitcher(true);
  //   }
  // }

  // useEffect(() => {
  //   const userTester = setTimeout(() => {
  //     console.log("this is user state from user tester:", user);
  //   }, 3500);
  //   return () => clearTimeout(userTester);
  // }, [handleSubmit])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(user.name = state.name);
    console.log(user.name);
  }
  
  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
    // setState(prev => prev[event.target.name] = value)
    // console.log(state.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="nameField" label="Name" variant="outlined" margin="dense" name="name" value={state.name} onChange={handleChange} />
      <TextField type="password" id="passwordField" label="Password" variant="outlined" margin="dense" name="password" value={state.password} onChange={handleChange} />
      <Button type="submit" variant="contained" color="secondary">Sign In</Button>
      <Link to="/" >
        <Button variant="outlined" color="primary">
          Homepage
        </Button>
      </Link>
    </form>
  );
}

export default LoginForm