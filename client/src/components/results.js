import React from "react";
import { useLocation } from "react-router-dom";

export default function Results(props) {
  const location = useLocation();

  console.log("Props: ", location.state)
  const questions = location.state.questions
  
  return (
    <h1>Hello Results page!</h1>
  )
}
