import React, { Fragment } from 'react';
import { Input, InputLabel } from 'material-ui/core';

const UserInput = (props) => {
  return (
    <Fragment> 
      <InputLabel
        name={props.name}
      />
      <Input
        name={props.name}
      />
    </ Fragment>
  )
}

export default UserInput;