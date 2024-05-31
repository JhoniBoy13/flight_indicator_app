"use client"
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FIComposeGraph} from "./components/FIComposeGraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FIComposeGraph degree={0}/>
      </header>
    </div>
  );
}

export default App;
