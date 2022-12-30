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

  // use this for page rendering
  useEffect(() => {
    findData();
  }, [])

  return(
    <div className="App">
      <h1> Glossary </h1>
      <label> Word: <input type="text" name="name" />
  </label>
  <label> Definition: <input type="text" name="definition" />
  </label>
  <input type="submit" value="Submit" />
      <div word="word">
          <WordList list={data}/>
        </div>
    </div>
  );
}

export default App;