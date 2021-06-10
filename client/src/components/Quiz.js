import React from 'react';
import QuizTable from "./QuizTable";
import useQuizData from "./hooks/useQuizData";


//Note: QuizTable --> Quiz --> App.js

export default function Quiz() {
 const {questions, answers } = useQuizData();

  return (
    <>
      {(questions && answers) && (
        <QuizTable questions={questions} answers={answers}/>
      )}
    </> 
  );
}

