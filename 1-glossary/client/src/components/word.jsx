import React, { Component} from "react";
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';

const Word = (props) => {

  const deleteData = (input) => {
    console.log(input);
    axios.delete('/words', {data: input})
    .then(response => {
      console.log('Entry Deleted');
    })
    .catch(err => {
      console.log(err);
    })
  }

  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
    deleteData(props);
  };

  return (
  <div >
    {visible ?
    <div>
      <h4>{props.word}: {props.definition} </h4>
      <button type="delete" onClick={() => removeElement()}>
      DELETE</button>
    </div>
      : null }
  </div>
)
      }

export default Word;
