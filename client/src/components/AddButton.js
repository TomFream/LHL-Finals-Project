import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Component_Style/Title";
import Table from "@material-ui/core/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function AddButton(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [playlists, setPlaylists] = useState(null);
  // const [questionAdded, setQuestionAdded] = useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);

  useEffect(() => {
    axios
      .get("/api/playlists")
      .then((response) => {
        setPlaylists(response.data.playlists);
      })
      .catch((err) => {
        console.log("api error: ", err);
      });
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  const handleAdd = (playlist_id, question_id) => {
    axios
      .post("/api/playlists/update", {
        playlist: playlist_id,
        question: question_id,
      })
      .then((response) => {
        console.log("Axios response: ", response);
        setAlertOpen(true);
      })
      .catch((error) => {
        console.log("Axios Error: ", error);
      });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const question_id = props.question_id;

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        Add To Playlist
      </Button>
      <Popover
        id={id}
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
        <Typography className={classes.typography}>
          <React.Fragment>
            <Title>Playlists</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Playlist</TableCell>
                  <TableCell>Date Created</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              {playlists && (
                <TableBody>
                  {playlists.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell>{row.created_at.split("T")[0]}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="primary"
                          keyId={row.id}
                          onClick={() => handleAdd(row.id, question_id)}
                        >
                          Add
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </React.Fragment>
        </Typography>
      </Popover>
      <Snackbar
        // anchorOrigin={{
        //   // vertical: "top",
        //   // horizontal: "left",
        // }}
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        message="Question Added!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleAlertClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
