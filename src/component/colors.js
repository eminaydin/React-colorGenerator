import React from "react";

const ColorSwatch = (props) => {
  return (
    <div style={{ backgroundColor: props.color }}>
      {props.color}
      <button
        onClick={() => {
          props.removeHandler(props.color);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ColorSwatch;
