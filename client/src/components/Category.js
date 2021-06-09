import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = (props) => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get(
        `/api/category/${props.id}`
      )
      .then((result) => {
        console.log("Quiz API", result.data);
        const testNew = result.data;
        setTest(() => ({
          testNew,
        }));
      });
  }, []);

  console.log("test", test);
  console.log("type", typeof test);

  return (
    <>
      <h1>{JSON.stringify(test)}</h1>
    </>
  );
};

export default Category;
