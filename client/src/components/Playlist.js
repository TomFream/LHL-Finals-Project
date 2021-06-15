import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Component_Style/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

//Note: QuizTable + Score + Playlist --> UserAccount --> NavBar --> App.js

// Generate Playlist
function createData(id, category, date, score) {
  return { id, category, date, score };
}

// const rows = [
//   // createData(0, 'JavaScript', '11 Jun, 2021', '100%'),
//   // createData(1, 'HTML', '11 Jun, 2021', '90%'),
//   // createData(2, 'SQL', '11 Jun, 2021', '80%'),
//   // createData(3, 'JavaScript', '11 Jun, 2021', '95%'),
//   // createData(4, 'JavaScript', '11 Jun, 2021','85%'),
// ];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Playlist() {
  const classes = useStyles();
  const [playlists, setPlaylists] = useState(null);

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

  return (
    <React.Fragment>
      <Title>Playlists</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Playlist</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Last Score</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        {playlists && (
          <TableBody>
            {playlists.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell>{row.created_at.split("T")[0]}</TableCell>
                <TableCell>{"temp"}</TableCell>
                <TableCell>
                  <Link
                    to={{
                      pathname: `/playlists/quiz/${row.name}`,
                      state: {
                        is_playlist: true,
                      },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outlined" color="primary">
                      Test
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more playlist
        </Link>
      </div>
    </React.Fragment>
  );
}
