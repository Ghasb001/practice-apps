import React, { Component } from "react";
import Word from "./word.jsx";
import WordList from "./wordList.jsx";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

//global variables
var clicked = false;
var submitInfo = [];
//resets the variables after the filter click
let reset = () => {
  clicked = false;
  submitInfo = [];
}

var App = () => {

  const [data, setData] = useState([]);

  const findData = () => {
    axios.get('/words')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const addData = (input) => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].word === input.word.toUpperCase()) {
        alert('I\'m sorry user, I\'m afraid I can\'t do that')
        return;
      }
    }
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

  let entrySub = (e) => {
    e.preventDefault();
    var word = e.target[0].value.toUpperCase();
    var definition = e.target[1].value;
    addData({ word: word, definition: definition });
  }

  let filterSub = (e) => {
    e.preventDefault();
    var entry = e.target[0].value.toUpperCase();
    var found = false;
    for (var i = 0; i < data.length; i++) {
      if (data[i].word === entry) {
        clicked = true;
        found = true;
        alert('Word found!');
        submitInfo.push(data[i]);
        break;
      }
    }
    if (!found) {
      alert('That word is not in this glossary');
    }
  }

  return (
    <div className="App">
      <h1> Glossary </h1>

      <form onSubmit={entrySub}>
        <label>
          Word:
          <input type="text" name="name" />
          Definition:
          <input type="text" def="def" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={filterSub}>
        <label>
          Search:
          <input type="text" name="Search" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div >
        {clicked ?
          <div>
            <WordList list={submitInfo} />
            <button type="delete" onClick={() => reset()}>
              BACK</button>
          </div>
          : <WordList list={data} />}
      </div>

    </div>
  );
}

export default App;