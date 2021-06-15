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

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function AddButton(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [questionAdded, setQuestionAdded] = useState(false);

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

  const handleAdd = (evt, playlist_id, question_id) => {
    axios 
      .post('/api/playlists/update',{
        playlist: playlist_id,
        question: question_id
      })
      .then((response) => {
        console.log("Response: ", response)
        // setQuestionAdded(true);
        // evt.target.style.visibility = 'hidden';
      })
      .catch((error) => {
        console.log("Error: ", error)
      });
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const question_id = props.question_id;

  return (
    <div>
      <Button
        // aria-describedby={id}
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
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
                        <Button variant="outlined" color="primary" keyId={row.id} onClick={() => (handleAdd(row.id, question_id))}>
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
    </div>
  );
}
