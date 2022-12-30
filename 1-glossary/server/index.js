require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const Promise = require('promise');
const db = require('./db.js');

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/words', (req, res) => {
  db.retrieve((err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.data = result;
      res.send(result).status(200);
    }
  })
})

app.post('/words', (req, res) => {
  db.save(req, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
})

app.delete('/words', (req, res) => {
  db.deleter(req, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200)
    }
  })
})


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});