import React, { Component} from "react";
import Word from "./word.jsx";
import WordList from "./wordList.jsx";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';


var App = () => {

  const [data, setData] = useState([])

  const findData = () => {
    axios.get('/words')
    .then(response => {
      console.log('RESPONSE:', response.data);
      setData(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const addData = () => {

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