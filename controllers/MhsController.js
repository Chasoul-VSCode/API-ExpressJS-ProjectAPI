const dbConnection = require('../config/database');

exports.getMahasiswa = (req, res) => {
    dbConnection.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) {
            res.status(500).send('Kesalahan saat mengambil data mahasiswa');
            console.error('Kesalahan query:', err);
        } else {
            res.json(results);
            console.log('Data mahasiswa berhasil diambil');
        }
    });
};