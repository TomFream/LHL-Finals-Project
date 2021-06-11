import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Component_Style/Title';


//Note: QuizTable + Score + Playlist --> UserAccount --> NavBar --> App.js

// Generate Playlist
function createData(id, category, date, score) {
  return { id, category, date, score};
}

const rows = [
  createData(0, 'JavaScript', '11 Jun, 2021', '100%'),
  createData(1, 'HTML', '11 Jun, 2021', '90%'),
  createData(2, 'SQL', '11 Jun, 2021', '80%'),
  createData(3, 'JavaScript', '11 Jun, 2021', '95%'),
  createData(4, 'JavaScript', '11 Jun, 2021','85%'),
];

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
  return (
    <React.Fragment>
      <Title>Playlist</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more playlist
        </Link>
      </div>
    </React.Fragment>
  );
}