import React from "react";
import { Button } from 'react-materialize';
import "./colors.css"

const ColorSwatch = (props) => {
  return (
    <div className="each-div">

      <div className="color-div" style={{ backgroundColor: props.color }}></div>
      <span> {props.color} </span>
      <Button
        onClick={() => {
          props.removeHandler(props.color);
        }}
        className="delete-btn"
      >
        Delete
      </Button>

    </div>
  );
};

export default ColorSwatch;
