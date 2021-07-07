import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

//NOTE: Main's parent --> NavBar  --> App.js

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://quizapp.com/">
        QuizStack
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
    paddingTop: theme.spacing(6),
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
  { name: "JavaScript", id: 1, image: "../../js2.png", canClick: true },
  { name: "React", id: 4, image: "../../react.png", canClick: false },
  { name: "SQL", id: 3, image: "../../sql.png", canClick: true },
  { name: "HTML", id: 2, image: "../../html.png", canClick: true },
];

export default function QuizApp() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Link
                  to={`/quiz/${card.id}`}
                  style={
                    card.canClick
                      ? { textDecoration: "none" }
                      : { pointerEvents: "none", textDecoration: "none" }
                  }
                >
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
                    </CardContent>
                    <CardActions>
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
      <footer className={classes.footer} style={{ backgroundColor: "#A3A3B0" }}>
        <Typography variant="h6" align="center" gutterBottom>
          QuizStack.ca
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
