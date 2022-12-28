import React, { Component} from "react";
import Word from "./word.jsx";
import WordList from "./wordList.jsx";
import raw from './boiler.js';
import { useState } from 'react';

var App = () => {
  return(
    <div className="App">
      <h1> Glossary </h1>
      <div word="word">
          <WordList list={raw} />
        </div>
    </div>
  );
}

export default App;