import React, { useState } from "react";
import { getQuizData } from "./hooks/useApplicationData";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./Component_Style/NavBar";
import Container from "@material-ui/core/Container";
import CardMedia from '@material-ui/core/CardMedia';
import Playlist from "./Playlist";
import Create from "./Create";
import Notes from "./Notes";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import { UserContext } from "./UserContext";

// import { mainListItems, secondaryListItems } from "./UserAccountMenuBarList";  //TODO

//Note: QuizTable + Score + Playlist --> UserAccount --> NavBar --> App.js

export default function UserAccount() {
  const { questions, answers, score, setScore } = getQuizData(); ///
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [ user, setUser ] = React.useContext(UserContext);
  const [notes, setNotes] = useState([]);

  const notesSubmit = (input) => setNotes([...notes, input]);

  const onDestroy = (index) => {
    setNotes([...notes.filter((element, i) => {
      if (i !== index ) {
        return element
      }
    })]);
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper square={"false"}>
            <CardMedia component="img" src="../../gokuAvatar.jpeg" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          {/* <Paper className={classes.fixedHeight}> */}
          <Card className={classes.userInfoBox}>
            <Typography className={classes.userTextInfoText} variant={'h6'}>Name: {user.name}</Typography>
            <Typography className={classes.userTextInfoText} variant={'h6'}>Occupation: {user.occupation}</Typography>
            <Typography className={classes.userTextInfoText} variant={'h6'}>Power Level: {user.powerLevel}</Typography>
            <Typography className={classes.userTextInfoText} variant={'h6'}>Favorite Activity: {user.favoriteActivity}</Typography>
            <Typography className={classes.userTextInfoText} variant={'h6'}>Known Web Technologies: {user.knownTech}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Playlist />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Notes notes={notes} onDestroy={onDestroy}/>
            <Create setNotes={notesSubmit}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
