const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});
 
// // simple query
// connection.query(
//   'SELECT * FROM `customers` WHERE `address` = "Highway 37"',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
 
// with placeholder
connection.query(
  'SELECT * FROM `customers` WHERE `address` = ? ',
  ['Highway 37'],
  function(err, results) {
    console.log(results);
  }
);