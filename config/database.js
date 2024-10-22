const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Ganti dengan host yang sesuai
  port: 3306, // Ganti dengan port yang sesuai (default MySQL adalah 3306)
  user: 'root', // Ganti dengan username yang sesuai
  password: '', // Ganti dengan password yang sesuai
  database: 'db_ecommerce' // Ganti dengan nama database yang sesuai
});

module.exports = connection;