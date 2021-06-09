import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lavender",
    width: "100%",
    maxWidth: 800,
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
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");

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

  const answers = [
    "Answer_Option1",
    "Answer_Option2, long long answer long.... testing",
    "Answer_Option3",
    "Answer_Option4",
  ];

  return (
    <Card className={classes.root}>
      <CardContent>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <FormLabel className={classes.label}>
              <Typography align="left" style={{ fontSize: "20px" }}>
                Pop quiz: Material-UI is...
              </Typography>
            </FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {answers.map((answer) => (
                <FormControlLabel
                  className={classes.label}
                  value={`${answer}`}
                  control={<Radio />}
                  label={`${answer}`}
                />
              ))}
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Check Answer
            </Button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            ></IconButton>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}
