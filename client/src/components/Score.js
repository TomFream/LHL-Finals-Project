import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 500 : 700],
  },
  bar: {
    borderRadius: 10,
    backgroundColor: '#007F5F',  //#52796f
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Score() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
          >
            Score
          </Typography>
      {/* <ADD COMPONENT WE WANT /> */}
      {/* number of questions answered correctly / total number of questions*/}
      <BorderLinearProgress variant="determinate" value={90} />
    </div>
  );
}
