require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);
app.use(express.json())

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/checkout', (req, res) => {
  db.query('SELECT * FROM userData', (err, results) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      res.send(results).status(200);
    }
  })

})

app.post('/checkout', (req, res) => {
  var insertString = 'INSERT INTO userData (cookie, name, email, password, L1, L2, city, state, zip, phone, cc, exp, cvv, billZip)';
  var valuesString = 'VALUES';
  console.log('REQ', req.body)
  var cookie = "'" + req.session_id + "'";


    // db.query('PLACEHOLDER', (err, results) => {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.sendStatus(201);
  //   }
  // })
  // res.send(req)
  res.sendStatus(201);
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);