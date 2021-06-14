import React from "react";
import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";

const checkColor = (index) => {
  if(index % 2 === 0) {
    return "#B2F7EF"
  } else {
    return "#F7D6E0"
  }
}

export default function Notes(props) {
  return (
    <div className="Notes">
      {props.notes.map((oneNote, i) => {
       return (<DraggableCard title={oneNote.title} text={oneNote.details} bgColor={checkColor(i)} noWrap="false" />)
      })}
    </div>
  );
}

const DraggableCard = ({ text, title, bgColor }) => {
  return (
    <Draggable>
      <Card
        style={{ width: "40%", backgroundColor: bgColor, color: "#3f51b5"}}
      >
        <Button variant="text">{title}</Button>
        <Typography variant="h6">{text}</Typography>
      </Card>
    </Draggable>
  );
};
