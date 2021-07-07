import React from "react";
import QuizTable from "./QuizTable";
import { getPlaylistQuizData } from "./hooks/useApplicationData";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./Component_Style/NavBar";
import Score from "./Score";

//Note: QuizTable + Score --> Quiz --> NavBar --> App.js

export default function PlaylistQuiz() {
  const { questions, answers, score, setScore } = getPlaylistQuizData();
  console.log("Questions/answers: ", questions, answers);
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          {questions && answers && (
            <QuizTable
              questions={questions}
              answers={answers}
              score={score}
              setScore={setScore}
            />
          )}
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Score score={score} questions={questions} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
