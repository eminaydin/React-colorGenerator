import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.colorGenerator=this.colorGenerator.bind(this)
  }
colorGenerator() {
document.querySelector("h2").className = "hidden";
document.querySelector(".colored-divs").style.display= "flex";
    let letters = "0123456789ABCDEF"; 
    let color = '#'; 
    for (let i = 0; i < 6; i++) 
       color += letters[(Math.floor(Math.random() * 16))];
      
       let divs = document.createElement("div");
       divs.className = "visible"
       divs.style.backgroundColor = color;
       document.querySelector(".colored-divs").appendChild(divs)
       
}
  render() {
    return (
      <div className="App">
        <h2>There are no colors yet.</h2>
        <div className="colored-divs"></div>
        <button onClick={this.colorGenerator}>Create a color</button>
      </div>
    );
  }
}


export default App;
