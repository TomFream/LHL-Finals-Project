import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> master

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lavender",
    width: "100%",
    maxWidth: 800,
    flexGrow: 5,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    width: "200px",
    justifyContent: "center",
    alignItems: "center",
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

export default function QuizTable(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");

  const [questions, setQuestions] = useState("Initial")
  const [answers, setAnswers] = useState()
  
  const params = useParams()
  useEffect(() => {
    axios
    .get(`/api/data/${params.id}`) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      setQuestions(response.data.questions)
      setAnswers(response.data.answers)
      console.log("API response: ", response)
    })
    .catch((error) => {
      console.log("ERROR: ", error)
    });
  }, [])

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  // console.log("Questions test: ", props.questions);
  // console.log("Answers test: ", props.answers);
  // console.log("Answer[0]: ", props.answers[0]);

  const questions = props.questions;
  const answerOptions = props.answers;
  // console.log("activeQuestion", activeQuestion);
  // console.log(answerOptions[activeQuestion]);

  const [activeStep, setActiveStep] = React.useState(0);

  const numQuestions = questions.length;

  const correctOptionObj = answerOptions[activeStep].find((option) => {
    if (option.is_correct === true) {
      return option;
    }
  });

  console.log("correctAnswer", correctOptionObj.answer_option);

  const handleNext = () => {
    setActiveStep((preActiveStep) => preActiveStep + 1);
    setHelperText("");
    setError(false);
  };

  const handleBack = () => {
    setActiveStep((preActiveStep) => preActiveStep - 1);
    setHelperText("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value) {
      setHelperText("Please select an answer.");
      setError(true);
    }

    // console.log("value", typeof value);
    // console.log("--------",typeof correctOptionObj.answer_option);
    // console.log("value", value);
    // console.log("--------", correctOptionObj.answer_option);

    if (value === correctOptionObj.answer_option) {
      setHelperText("You got it!");
      setError(false);
    }

    if (value && value !== correctOptionObj.answer_option) {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    }
  };
<<<<<<< HEAD
  
  // const questions = props.questions;
  
  

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
=======
>>>>>>> master

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
                {questions[activeStep].question}
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {answerOptions[activeStep].map((answer) => (
                <FormControlLabel
                  className={classes.label}
                  value={`${answer.answer_option}`}
                  control={<Radio />}
                  label={`${answer.answer_option}`}
                />
              ))}
            </RadioGroup>
            <FormHelperText style={{ fontSize: "15px" }}>
              {helperText}
            </FormHelperText>
            <div>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Check Answer
              </Button>
            </div>
            <MobileStepper
              style={{
                backgroundColor: "lavender",
                justifyContent: "center",
                alignItems: "center",
              }}
              steps={numQuestions}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === numQuestions - 1}
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
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}
