import React from "react";
import "./App.css";
import ColorSwatch from "./component/colors.js";
import "materialize-css";
import { Button } from "react-materialize";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.removeColor = this.removeColor.bind(this);
    this.addColor = this.addColor.bind(this);
  }
  removeColor(color) {
    let newColors = this.state.colors.filter((pattern) => {
      return pattern !== color;
    });
    this.setState({
      colors: newColors,
    });
  }

  addColor() {
    this.setState({
      colors: [this.generateColor(), ...this.state.colors],
    });
  }

  generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          {this.state.colors.length === 0 ? (
            <div className="initial-info">
              <h2>There are no colors yet.</h2>
              <h3>Click the button to generate random colors.</h3>
            </div>
          ) : (
            <div className="outer-div">
              {this.state.colors.map((item) => {
                return (
                  <ColorSwatch color={item} removeHandler={this.removeColor} />
                );
              })}
            </div>
          )}
          <Button
            node="button"
            waves="light"
            onClick={this.addColor}
            className="create-btn"
          >
            Create a color
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
