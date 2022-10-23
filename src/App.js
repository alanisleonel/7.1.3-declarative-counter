import React from 'react'
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  // Invoking the useState function.
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  )
}

export default App;
