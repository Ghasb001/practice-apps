import React, { Component} from "react";
import { useState } from 'react';
import { useRef } from 'react';

const Word = (props) => {
  console.log(props);

  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  // 1 > 2 ? truthCatch:falseCatch

  let purge = function () {
    delete {props};
  }

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
