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
    console.log('DATA:', data);
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

  //
  let entrySub = (e) => {
    e.preventDefault();
    var word = e.target[0].value.toUpperCase();
    var definition = e.target[1].value;
    addData({word: word, definition: definition});
  }

  let filterSub = (e) => {
    var entry = e.target[0].value.toUpperCase();
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      if (data[i].word === entry) {
        alert(data[i].word + ': ' + data[i].definition);
        // setData(data[i]);
      }
    }
    debugger;

    // axios.get('/words')
    // .then(response => {
    //   console.log(response);
    //   alert(response);
    //   debugger;
    // })
    // .catch(err => {
    //   console.log(err);
    // })


  }

  return(
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

      <div word="word">
          <WordList list={data}/>
        </div>
    </div>
  );
}

export default App;