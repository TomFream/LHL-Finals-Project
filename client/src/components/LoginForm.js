import React, { useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { FormControl, Button, TextField } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/styles';
// import { createMuiTheme } from '@material-ui/core';

const LoginForm = () => {

  useState({
    name: '',
    email: ''
  })

  const theme = useTheme({
    spacing: '10px',
    background: 'white',
    color: 'black'
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <TextField id="nameField" label="Name" variant="outlined" />
        <TextField id="passwordField" label="Password" variant="outlined" />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </FormControl>
    </ThemeProvider>
  );
}

export default LoginForm