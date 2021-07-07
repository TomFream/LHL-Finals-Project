import React, { useState, useEffect } from "react";
import axios from "axios";

//Fetch User Info from Backend

const User = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("/api/user/:id").then((response) => {
      // handle success
      console.log("user obj", response.data);
      setUser(response.data);
    });
  }, []);

  return (
    <>
      {users.map((user) => (
        <div>
          id: {user.id}
          <br />
          name: {user.name}
          <br />
          email: {user.email}
        </div>
      ))}
    </>
  );
};

export default User;
