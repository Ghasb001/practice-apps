import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// boolean checks to determine the form number
var checkoutClick = false;
var f1Click = false;

var App = () => {
  const [count, setCount] = useState(null);

  var checkSub = (e) => {
    console.log(e);
  }

  let testCheck = () => {
    let renders = (<div>
      <h2>F1 true</h2>
      <button type="F1 Submit" onClick={f1Sub}> Next</button>
    </div>)
    setCount(renders);
  }


  // item1 LOGIC item2 ? firstCondition : secondCondition

  return (<div>

    <div>
        <h2>F1 False</h2>
        <button type="F1 Submit" onClick={testCheck}> Checkout</button>
      </div>

  </div>)
}

export default App;

/*

var f2Click = false;
var f3Click = false;

var f1Info = [];
var f2Info = [];
var f3Info = [];

let reset = () => {
  checkoutClick = false;
  f1Click = false;
  f2Click = false;
  f3Click = false;
}


 let f1Sub = (e) => {
    alert('Clicked');
    console.log(e);
  }

  let f2Sub = (e) => {
    alert('Clicked');
    console.log(e);
  }

  let f3Sub = (e) => {
    alert('Clicked');
    console.log(e);
  }

  let orderSubmit = (e) => {
    alert('Clicked');
    console.log(e);



    {checkoutClick ?
      <div>
        <h2>F1 true</h2>
        <button type="F1 Submit" onClick={f1Sub}> Next</button>
      </div>
      :
      <div>
        <h2>F1 False</h2>
        <button type="F1 Submit" onClick={setCount}> Checkout</button>
      </div>}

    {f1Click ?
      <div>
        <h2>F1 true</h2>
        <button type="F1 Submit" onClick={f1Sub}> Next</button>
      </div>
      :
      <div>
        <h2>F1 False</h2>
        <button type="F1 Submit" onClick={checkSub}> Next</button>
      </div>}



    {f2Click ?
      <div>
        <h2>F2 true</h2>
        <button type="F1 Submit" onClick={f2Sub}> Next</button>
      </div>
      : null}

    {f3Click ?
      <div>
        <h2>F3 true</h2>
        <button type="F1 Submit" onClick={f3Sub}> Next</button>
      </div>
      : null}


*/