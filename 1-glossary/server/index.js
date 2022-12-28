require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const Promise = require('promise');
const db = require('./db.js');

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/words', (req, res) => {
  db.retrieve();
  res.sendStatus(200)
  res.end();
})

app.post('/words', (req, res) => {
  console.log('here')
  res.end();
})


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});