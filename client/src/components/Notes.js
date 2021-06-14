import React from "react";
import { Card, Button, Typography } from "@material-ui/core";
import Draggable from "react-draggable";
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';

const checkColor = (index) => {
  if(index % 2 === 0) {
    return "#B2F7EF"
  } else {
    return "#F7D6E0"
  }
}

export default function Notes(props) {
  console.log('hello', props)
  return (
    <>
    <div className="Notes">
      {props.notes.map((oneNote, i) => {
        return (<><DraggableCard title={oneNote.title} text={oneNote.details} bgColor={checkColor(i)} noWrap="false" index={i} onDestroy={props.onDestroy} /></>)
      })}
    </div>
    </>
  );
}

const DraggableCard = ({ text, title, bgColor, index, onDestroy }) => {
  return (
    <Draggable>
      <Card
        style={{ width: "40%", backgroundColor: bgColor, color: "#3f51b5"}}
      >
         <CancelTwoToneIcon onClick={() => onDestroy(index)} key={index}/>
        <Button variant="text" key={index}>{title}</Button>
        <Typography variant="h6">{text}</Typography>
      </Card>
    </Draggable>
  );
};
