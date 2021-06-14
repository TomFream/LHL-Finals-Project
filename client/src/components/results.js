import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Component_Style/Title';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import Score from "./Score";
import UserQuizStatsGeneral from "./UserQuizStatsGeneral";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));


export default function Results(props) {
  const location = useLocation();
  const classes = useStyles();

  console.log("Props: ", location.state.answers);
  const questions = location.state.questions;

  const answersArr = [];
    const correctAnswersArr = location.state.answers.forEach(arr => {
    arr.find(correct => {
      if (correct.is_correct === true) {
        // console.log("correctAnswersArr", correct.answer_option);
         answersArr.push(correct.answer_option)
      }
    })
  });
  
  // console.log("Results/correctAnswer", answers, correctAnswersArr);
  console.log("ketchup", location.state);


  return (
    <React.Fragment>
      <Title>Results</Title>
      <h2>Score: {location.state.score}</h2>
      <hr></hr>
      <UserQuizStatsGeneral />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Questions</TableCell>
            <TableCell>Correct Answer</TableCell>
            <TableCell>Your Results</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((row, i) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.question}</TableCell>
              <TableCell align="left">{answersArr[i]}</TableCell>
              <TableCell align="center">{location.state.incorrectAnswers[row.id] ? <CancelIcon /> : <CheckIcon />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more results
        </Link>
      </div>
    </React.Fragment>
  );
}
