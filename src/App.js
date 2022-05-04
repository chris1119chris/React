import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, updName] = useState(0);
  const updateData = () => {
    try {
      updName (name +1);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contador {name}<br/>
          <button onClick={updateData}>Actualizar

          </button>
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
    </div>
  );
}

export default App;
