require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('client/dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
  res.end();
})


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});