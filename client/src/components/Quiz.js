import React from "react";
import QuizTable from "./QuizTable";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import ListItemText from "@material-ui/core/ListItemText";
// import Checkbox from "@material-ui/core/Checkbox";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     align: "center",

//     width: "100%",
//     maxWidth: 800,
//     backgroundColor: theme.palette.background.paper,
//   },

//   pos: {
//     marginBottom: 50,
//   },
// }));

export default function Quiz() {
  // const classes = useStyles();

  // const [checked, setChecked] = React.useState([0]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <>
    <QuizTable />
    </> 
  );
}

      {/* <Card className={classes.root} style={{ backgroundColor: "orange" }}>
        <CardContent>
          <Typography align="left" style={{ FontFamily: "Roboto" }}>
            Question: Inside which HTML element do we put the JavaScript?
          </Typography> */}

          {/* <List className={classes.root}> */}
          {/* {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`Answer_Option ${value + 1}`}
                />

              </ListItem>
            );
          })} */}
          {/* </List> */}
      {/* <Button align="left" variant="contained" color="primary">
        Submit
      </Button>
        </CardContent> */}
      {/* </Card> */}
 