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
      setData(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  const addData = () => {
    axios.post('/words')
    .then(response => {
      console.log('RESPONSE:', response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  var func = () => {
    console.log('CLICK')
  }

  // use this for page rendering
  useEffect(() => {
    findData();
  }, [])

  let onSub = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return(
    <div className="App">
      <h1> Glossary </h1>

      <button onClick={onSub}>Default</button>;



      <div word="word">
          <WordList list={data}/>
        </div>
    </div>
  );
}

export default App;