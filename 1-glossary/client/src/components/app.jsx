import React, { Component} from "react";
import Word from "./word.jsx";
import WordList from "./wordList.jsx";
import raw from './boiler.js';
import { useState } from 'react';
import axios from 'axios';


var App = () => {

  const findData = () => {
    axios.get('/words')
    .then(response => {
      console.log('RESPONSE:', response);
      return response;
    })
  }



  return(
    <div className="App">
      <h1> Glossary </h1>
      <h1> FIND: {findData()} </h1>
      <div word="word">
          <WordList list={raw}/>
        </div>
    </div>
  );
}

export default App;