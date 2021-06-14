import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Title from "./Component_Style/Title";
import Container from "@material-ui/core/Container";


import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  loginBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 0
  }
}));

export default function LoginDropDown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  

  return (
    
    <Container>
      <Button
        aria-describedby={id}
        variant="contained"
        color="inherit"
        back
        onClick={handleClick}
      >
        Add To Playlist
      </Button>
      <Popover
        id={id}
        className={classes.loginBox}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        >
        <LoginForm />
      </Popover>
    </Container>
    
  );
}