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

    let letters = "0123456789ABCDEF"; 
    let color = '#'; 
    for (let i = 0; i < 6; i++) 
       color += letters[(Math.floor(Math.random() * 16))];
      
       let divs = document.createElement("li");
       divs.innerHTML =  `
       <div class="color-divs"></div>`
       divs.style.backgroundColor = color;
       document.querySelector(".App").appendChild(divs)
       
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
