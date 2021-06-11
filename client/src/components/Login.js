import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = (props) => {

const [ name, setName ] = useState('');
const [ password, setPassword ] = useState('');
const [ email, setEmail ] = useState('');
const [ errors, setErrors ] = useState();
const [ user, setUser ] = useState({});

const handleChange = (event) => {
    const {name, value} = event.target
    setName(value);
  };
const handleSubmit = (event) => {
    event.preventDefault();
    // const {username, email, password} = this.state

     setUser ({
      ...name,
      ...email,
      ...password
    })
  };
  
const loginStatus = () => {
  axios.post('http://localhost:3002/api/login', {user}, {withCredentials: true})
  .then(response => {
    if (response.data.logged_in) {
      props.handleLogin(response.data)
      // this.redirect()
    } else {
      // this.setState({
      //   errors: response.data.errors
      // })
      setErrors(response.data.errors);
    }
  })
  .catch(error => console.log('api errors:', error))
}

// redirect = () => {
//   this.props.history.push('/')
// }
const handleErrors = () => {
  return (
    <div>
      <ul>
      {errors.map(error => {
      return <li key={error}>{error}</li>
        })}
      </ul>
    </div>
  )
}

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
              placeholder="email"
              type="text"
              name="email"
              value={email}
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