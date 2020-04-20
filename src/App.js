import React from "react";
import "./App.css";
import ColorSwatch from "./component/colors.js";

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
    console.log(color);

    let some = this.state.colors.filter((pattern) => {
      return pattern !== color;
    });
    this.setState({
      colors: some,
    });

    console.log(some);
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
        {this.state.colors.length === 0 ? (
          <h2>There are no colors yet.</h2>
        ) : (
          <div className="colored-divs">
            {this.state.colors.map((item) => {
              return (
                <ColorSwatch color={item} removeHandler={this.removeColor} />
              );
            })}
          </div>
        )}

        <button onClick={this.addColor}>Create a color</button>
      </div>
    );
  }
}

export default App;
