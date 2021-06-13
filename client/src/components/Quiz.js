import React from "react";
import QuizTable from "./QuizTable";
import useQuizData from "./hooks/useQuizData";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./Component_Style/NavBar";
import Score from "./Score";
import { SortRounded } from "@material-ui/icons";

//Note: QuizTable + Score --> Quiz --> NavBar --> App.js

export default function Quiz() {
  const { questions, answers, score, setScore } = useQuizData();

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          {/* <Paper className={fixedHeightPaper}> */}
          {questions && answers && (
            <QuizTable questions={questions} answers={answers} score={score} setScore={setScore} />
          )}
          {/* </Paper> */}
        </Grid>
        {/*Score*/}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
          <Score score={score} questions={questions} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
