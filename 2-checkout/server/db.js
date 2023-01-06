const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
    // Expand this table definition as needed:

  .then(() =>
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, cookie TEXT, name TEXT, email TEXT, password TEXT, L1 TEXT, L2 TEXT, city TEXT, state TEXT, zip TEXT, phone TEXT, cc TEXT, exp TEXT, cvv TEXT, billZip TEXT)"
    )
  )
  .catch((err) => console.log(err));



module.exports = db;
