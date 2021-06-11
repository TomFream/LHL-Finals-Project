import React, { useState, useEffect } from "react";
import axios from "axios";

//Fetch User Info from Backend

const User = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    axios
    .get("/api/user/:id")
    .then((response) => {
      // handle success
      console.log("user obj", response.data);
      setUser(response.data);   
    });
  }, []);

  console.log("users", users);
  // console.log("type", typeof users);
  // const data = () => { 
  //   return users.map((user) => {<div>{user.id}<br/>{user.name}<br/>{user.email}</div>})
  // }
  return (
    <>
      {users.map(user => <div>id: {user.id}<br/>name: {user.name}<br/>email: {user.email}</div>)}
      {/* {data} */}
      {/* <h1>{users && users[1]}</h1> */}
      {/* <h1>{users && JSON.stringify(users[1])}</h1> */}
      {/* <h1>{users && JSON.stringify(users[1])}</h1> */}
    </>
  );
};

export default User;
