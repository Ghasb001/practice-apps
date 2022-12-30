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

  const addData = (input) => {
    console.log('INPUT:', input);
    axios.post('/words', input)
    .then(response => {
      alert('Save Successful');
    })
    .catch(err => {
      console.log(err);
    })
  }

  // use this for page rendering
  useEffect(() => {
    findData();
  }, [data])

  let onSub = (e) => {
    e.preventDefault();
    let word = e.target[0].value.toUpperCase();
    let definition = e.target[1].value;
    addData({word: word, definition: definition});
  }

  return(
    <div className="App">
      <h1> Glossary </h1>

      <form onSubmit={onSub}>
  <label>
    Word:
    <input type="text" name="name" />
    Definition:
    <input type="text" def="def" />
  </label>
  <input type="submit" value="Submit" />

</form>


      <div word="word">
          <WordList list={data}/>
        </div>
    </div>
  );
}

export default App;