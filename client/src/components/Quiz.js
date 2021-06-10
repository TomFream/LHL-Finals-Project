import React from "react";
import QuizTable from "./QuizTable";

export default function Quiz(props) {

  return (
    <>
    <QuizTable questions={props.questions} answers={props.answers}/>
    </> 
  );
}
