import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { UserContext } from './UserContext';
import LoginForm from "./LoginForm";


//NOTE: Main's parent --> NavBar  --> App.js

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://quizapp.com/">
        Quiz App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    backgroundColor: "white",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    // width: "350px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "orange",
    transition: "transform .2s" /* Animation */,
    borderRadius: "18px",
    "&:hover": {
      opacity: 0.8,
      transform: "scale(1.03)",
      background: "#C9A1BE",
    },
  },

  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 10,
    height: "60px",
    color: "lavender",
    backgroundColor: "#4682B4",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  { name: "JavaScript", id: 1, image: "../../js2.png" },
  { name: "React", image: "../../react.png" },
  { name: "SQL", id: 3, image: "../../sql.png" },
  { name: "HTML", id: 2, image: "../../html.png" },
];

export default function QuizApp() {
  const [user, setUser] = useContext(UserContext);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            
            {user.name ? <h1>Hello, {user.name}.</h1> : <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              >
              Please login or Signup, for free. To access our extra features. Treat yo' self!
            </Typography>}
            {user.name ? <h2>Here are some cool stats.</h2> : <LoginForm /> }
            <div className={classes.heroButtons}>
              {user.name ? <h3>Imagine pie charts that can carousel into graph charts</h3> :<Grid container spacing={3} justify="center">
                <Grid item>
                  {/* Quiz Link */}
                  <Link
                    to="/quiz"
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    <Button variant="outlined" color="secondary">
                      QUIZ GAME
                    </Button>
                  </Link>
                </Grid>
              </Grid>}
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6} onClick={() => console.log("Clicked!", card.name)}>
                <Link to={`/quiz/${card.id}`}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.name}
                      </Typography>
                      {/* <Typography>
                        This is a media card. You can use this section to describe
                        the content.
                      </Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button size="md" color={"white"}>
                        Share
                      </Button>
                      <Button size="md" color={"white"}>
                        Start Quiz
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
