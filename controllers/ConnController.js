<<<<<<< HEAD
=======
// controllers/ConnController.js
>>>>>>> d1f7a408441c9b544c24e4dbdeb9340b05991905
const dbConnection = require('../config/database');

exports.connDB = (req, res) => {
    dbConnection.connect((err) => {
        if (err) {
            res.status(500).send('Sorry, DB!');
            console.error('Kesalahan koneksi ke database:', err);
        } else {
            res.send('Hello, DB!');
            console.log('Berhasil terhubung ke database');
        }
    });
<<<<<<< HEAD
};
=======
};
>>>>>>> d1f7a408441c9b544c24e4dbdeb9340b05991905
