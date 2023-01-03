import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// boolean checks to determine the form number
var f1Click = false;
var f2Click = false;
var f3Click = false;

var App = () => {

  let f1Sub = (e) => {
    console.log(e);
  }

  let f2Sub = (e) => {
    console.log(e);
  }

  let f3Sub = (e) => {
    console.log(e);
  }

  let orderSubmit = (e) => {
    console.log(e);
  }

  return ( <div>
         <p>Guillermo's Online Stop-n-Shop!</p>
         <p>
           <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
         </p>
       </div>)
}

export default App;