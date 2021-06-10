import React, { useEffect, useState } from "react";
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

  const [activeQuestion, setActiveQuestion] = React.useState(0);

  const numQuestions = questions.length;

  const correctOptionObj = answerOptions[activeQuestion].find((option) => {
    if (option.is_correct === true) {
      return option;
    }
  });

  console.log("correctAnswer", correctOptionObj.answer_option);

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
              {answerOptions[activeQuestion].map((answer) => (
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
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}
