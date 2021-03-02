import './App.css';
import React from 'react';
import PreviousButton from './components/previousbutton';
import NextButton from './components/nextbutton';


function App() {
  return (
    <div className="App">
      <header>
        Welcome to the Outfit Picker
      </header>
      <PreviousButton/>
      <NextButton/>
    </div>
  );
}

export default App;
