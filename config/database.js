const mysql = require('mysql2');

// Buat koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Ganti dengan password MySQL Anda
    database: 'kurir_db'
});

// Cek koneksi database
db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});

module.exports = db;
