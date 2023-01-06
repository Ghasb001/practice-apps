import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// boolean checks to determine the form number
var checkoutClick = false;
var data = {};
let purchased = false;

var App = () => {

  const [form, setForm] = useState(null);
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };

    const findData = () => {
    axios.get('/checkout')
      .then(response => {
        let userData = response.data;
        let currentCookie = JSON.stringify(document.cookie, undefined, "\t");
        for (var i = 0; i < userData.length; i++) {
          if (userData[i].cookie === currentCookie) {
            checkoutClick = true;
            purchased = true;
            removeElement();
            return;
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    findData();
  }, [])


  const addData = () => {
    //let session = findData();
    //console.log(session)
    axios.post('/checkout', data)
      .then(response => {
        alert('Save Successful');
      })
      .catch(err => {
        console.log(err);
      })
  }


  const styles = {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    height: '100vh',
  }

  let F1Render = () => {
    checkoutClick = true;
    var F1 = (
      <form >
        <div>
          <label>
            Name----
            <input type="text" name="name" onChange={(e) => {
              console.log(e);
              e.preventDefault();
              e.stopPropagation();
              data.name = e.target.value;
          }}
              />
          </label>
        </div>
        <div>
          <label>
            Email---
            <input type="text" email="email" onChange={(e) => {
              e.preventDefault();
              data.email = e.target.value}}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="text" password="password" onChange={(e) => {
              e.preventDefault();
              data.password = e.target.value}}/>
          </label>
        </div>
        <button onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          F2Render();
        }}> Next </button>
      </form>
    )
    setForm(F1);
  }

  let F2Render = () => {
    var F2 = (
      <form >
        <div>
          <label>
            Line 1--
            <input type="text" l1="l1" onChange={(e) => {

              e.preventDefault();
              e.stopPropagation();
              data.L1 = e.target.value;}}/>
          </label>
        </div>
        <div>
          <label>
            Line 2--
            <input type="text" l2="l2" onChange={(e) => {
              e.preventDefault();
              data.L2 = e.target.value}}/>
          </label>
        </div>
        <div>
          <label>
            City----
            <input type="text" city="city" onChange={(e) => {
              e.preventDefault();
              data.city = e.target.value}}/>
          </label>
        </div>
        <div>
          <label>
            State---
            <input type="text" state="state" onChange={(e) => {
              e.preventDefault();
              data.state = e.target.value}}/>
          </label>
        </div>
        <div>
          <label>
            Zip Code-
            <input type="text" zip="zip" onChange={(e) => {
              e.preventDefault();
              data.zip = e.target.value}}/>
          </label>
        </div>
        <div>
          <label>
            Phone#--
            <input type="text" zip="zip" onChange={(e) => {
              e.preventDefault();
              data.zip = e.target.value}}/>
          </label>
        </div>
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
      <div>
        <label>
          CC Number--------
          <input type="text" cc="cc" onChange={(e) => {
            e.preventDefault();
            data.ccn = e.target.value}}/>
        </label>
      </div>
      <div>
        <label>
          Exp Date---------
          <input type="text" exp="exp" onChange={(e) => {
            e.preventDefault();
            data.expDate = e.target.value}}/>
        </label>
      </div>
      <div>
        <label>
          CVV--------------
          <input type="text" cvv="cvv" onChange={(e) => {
            e.preventDefault();
            data.cvv = e.target.value}}/>
        </label>
      </div>
      <div>
        <label>
          Billing Zip Code-
          <input type="text" billzip="billzip" onChange={(e) => {
            e.preventDefault();
            data.billZip = e.target.value}}/>
        </label>
      </div>
      <button onClick={(e) => {
        e.preventDefault();
        alert('Purchase Complete!')
        //checkoutClick = false;
        console.log(data);
        var final = (<h4>Your purchase is processing</h4>)
        setForm(final);
      }}> Purchase </button>
    </form>
    )
    setForm(F3);
  }
  return (<div style={styles}>

    {checkoutClick ?
      null
      :
      <div>
        <button onClick={F1Render}> Checkout </button>
      </div>}

      {visible ?
      null
      :
      <h3>Your purchase is processing</h3>}

    <h3>{form}</h3>

  </div>)
}

export default App;