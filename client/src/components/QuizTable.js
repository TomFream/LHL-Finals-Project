import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//card
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
// import ShuffleOnOutlinedIcon from '@material-ui/icons/ShuffleOnOutlined';
import Switch from "@material-ui/core/Switch";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lavender",
    width: "100%",
    maxWidth: 800,
    flexGrow: 10,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  form: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "black",
  },
  label: {
    fontFamily: "Roboto",
  },
}));

export default function ErrorRadios() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  // const [shuffle, setShuffle] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  // });

  // const handleShuffleChange = (event) => {
  //   setShuffle({ ...shuffle, [event.target.name]: event.target.checked });
  //   // random(answersArr);
  // };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value) {
      setHelperText("Please select an option.");
      setError(true);
    }

    if (value === "Answer_Option1") {
      //CORRECT ANSWER GOES HERE
      setHelperText("You got it!");
      setError(false);
    }

    if (value && value !== "Answer_Option1") {
      //Update this as well
      setHelperText("Sorry, wrong answer!");
      setError(true);
    }
  };

  const questions = [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      category_id: 1,
      created_at: "2021-06-08T02:35:20.692Z",
      updated_at: "2021-06-08T02:35:20.692Z",
    },
    {
      id: 2,
      question: "What is the correct HTML for making a hyperlink?",
      category_id: 2,
      created_at: "2021-06-08T02:35:20.701Z",
      updated_at: "2021-06-08T02:35:20.701Z",
    },
    {
      id: 3,
      question: "What is the correct HTML for making a text area?",
      category_id: 2,
      created_at: "2021-06-08T02:35:20.748Z",
      updated_at: "2021-06-08T02:35:20.748Z",
    },
  ];

  const answer_options = [
    "Answer_Option1",
    "Answer_Option2, long long answer long.... testing",
    "Answer_Option3",
    "Answer_Option4",
  ];

  const answersArr = [
    "Answer_Option1",
    "Answer_Option2, long long answer long.... testing",
    "Answer_Option3",
    "Answer_Option4",
  ];

  // const answersRandom = answersArr.sort(() => Math.random() - 0.5);

  // let answers;
  // if (shuffle.checkedA) {
  //   answers = answersRandom
  // } else {
  //   answers = answersArr
  // }
  // const shuffleToggle = (answersRandom, answersArr) => {
  //   if (shuffle.checkedA) {
  //     return answersRandom;
  //   } else {
  //     return answersArr;
  //   }
  // }

  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const numQuestions = questions.length;

  const handleNext = () => {
    setActiveQuestion((preActiveQuestion) => preActiveQuestion + 1);
  };

  const handleBack = () => {
    setActiveQuestion((preActiveQuestion) => preActiveQuestion - 1);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form className={classes.form} onSubmit={handleSubmit}>
          {" "}
          {/*Show Error Msgs*/}{" "}
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <FormLabel className={classes.label}>
              <Typography align="left" style={{ fontSize: "20px" }}>
                {questions[activeQuestion].question}
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {answersArr.map((answer) => (
                <FormControlLabel
                  className={classes.label}
                  value={`${answer}`}
                  control={<Radio />}
                  label={`${answer}`}
                />
              ))}
              {/* {shuffle.checkedA === false && answersArr.map((answer) => (
                <FormControlLabel
                  className={classes.label}
                  value={`${answer}`}
                  control={<Radio />}
                  label={`${answer}`}
                />
              ))} */}
            </RadioGroup>
            <FormHelperText style={{ fontSize: "15px" }}>
              {helperText}
            </FormHelperText>

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Check Answer
            </Button>

            <MobileStepper
              steps={numQuestions}
              position="static"
              variant="text"
              activeQuestion={activeQuestion}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeQuestion === numQuestions - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeQuestion === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />

            {/* <Switch
        checked={shuffle.checkedA}
        onChange={handleShuffleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />{`${shuffle.checkedA}`} */}
            {/* <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            ></IconButton> */}
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}
