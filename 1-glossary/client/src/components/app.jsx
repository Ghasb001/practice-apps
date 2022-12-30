import React, { Component} from "react";
import Word from "./word.jsx";
import WordList from "./wordList.jsx";
import raw from './boiler.js';
import { useState, useEffect } from 'react';
import axios from 'axios';


var App = () => {

  const [data, setData] = useState([])

  //setData(arr => arr.forEach(x => data.push(x)))

  const findData = () => {
    axios.get('/words')
    .then(response => {
      console.log('RESPONSE:', response.data);
      //setData(response.data);
      setData(response.data)
      //return response.data;
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    findData();
  }, [])

  return(
    <div className="App">
      <h1> Glossary </h1>
      <div word="word">
          <WordList list={data}/>
        </div>
    </div>
  );
}

export default App;