import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      
    })
    this.colorGenerator=this.colorGenerator.bind(this)
  }
colorGenerator() {
document.querySelector(".App").remove();
}
  render() {
    return (
      <div className="App">
        <h2>There are no colors yet.</h2>
        <button onClick={this.colorGenerator}>Create a color</button>
      </div>
    );
  }
}


export default App;
