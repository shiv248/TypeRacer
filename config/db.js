const mysql = require('mysql')
require('dotenv').config();
const db = mysql.createPool({
  connectionLimit : 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
})

db.getConnection(function(err) {
  if (err) {
    return console.error('DB Error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

module.exports = db;
