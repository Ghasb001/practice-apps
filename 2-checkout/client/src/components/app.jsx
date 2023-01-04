import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
//import F1 from './f1.jsx';

// boolean checks to determine the form number
var checkoutClick = false;
var f1Click = false;

var data = {};

var App = () => {
  // const [page, setPage] = useState(null);

  var checkSub = (e) => {
    console.log(e);
  }

  const [form, setForm] = useState(null);

  //const [visible, setVisible] = useState(true);
  // const removeElement = () => {
  //   setVisible((prev) => !prev);
  //   deleteData(props);
  // };


let F1Render = () => {
  var F1 = (
  <form>
    <label>
      Name:
      <input type="text" name="name" />
      Email:
      <input type="text" email="email" />
      Password:
      <input type="text" password="password" />
    </label>
    <button onClick={(e) => {
      e.preventDefault();
      F2Render();
    }}> Next </button>
    </form>
    )
  setForm(F1);
}

let F2Render = () => {
  var F2 = (
  <form >
    <label>
      Line 1:
      <input type="text" l1="l1" />
      Line 2:
      <input type="text" l2="l2" />
      City:
      <input type="text" city="city" />
      State:
      <input type="text" state="state" />
      Zip Code:
      <input type="text" zip="zip" />
    </label>
    <button onClick={(e) => {
      e.preventDefault();
      F3Render();
    }}> Next </button>
    </form>
    )
  setForm(F2);
}

let F3Render = () => {
  var F3 = (<form>

    <label>
      Credit Card Number:
      <input type="text" cc="cc" />
      Exp. Date:
      <input type="text" exp="exp" />
      CVV (3 numbers on the back of your card):
      <input type="text" cvv="cvv" />
      Billing Zip Code:
      <input type="text" billzip="billzip" />
    </label>
    <button onClick={(e) => {
      e.preventDefault();
      //F2Render();
      alert('Purchase Complete!')
    }}> Purchase </button>
    </form>
    )
  setForm(F3);
}

  // item1 LOGIC item2 ? firstCondition : secondCondition

  return (<div>

      <button onClick={F1Render}> Checkout </button>
      <h3>{form}</h3>

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