import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainPageAllBlocks from "./mainPage/mainPageAllBlocks";

function App() {
  return (
    <div className="App">
        {mainPageAllBlocks()}
    </div>
  );
}

export default App;
