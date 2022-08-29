const mysql = require('mysql2');
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: '',
    database: 'departments_db'
  }
);

function viewDep(){
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
}

module.exports = {
  viewDep,
}