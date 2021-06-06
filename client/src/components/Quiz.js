import React, { Component, useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const Quiz = () => {
  //const test = [];

  const [test, setTest] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&difficulty=Easy&limit=10`
      )
      .then((result) => {
        console.log("Quiz API", result.data);
        // test.push(result.data);
        const updated = result.data;
        setTest(() => ({
          // result.data
        }));
      });
  }, []);

  // const v = test.updated.map(e => e.id);

  console.log("test", test);

  console.log("type", typeof test);

  return (
    <>
      {/* <h1>{test.result.data[0].id}</h1> */}
    </>
  );
};

export default Quiz;
