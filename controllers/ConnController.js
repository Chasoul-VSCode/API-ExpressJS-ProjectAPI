const db = require('../config/database');

// Create - Menambah Kurir Baru
exports.createKurir = (req, res) => {
    const { nama, alamat, telepon } = req.body;

    const query = `INSERT INTO kurir (nama, alamat, telepon) VALUES (?, ?, ?)`;
    db.query(query, [nama, alamat, telepon], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Kurir berhasil ditambahkan.', id: result.insertId });
    });
};

// Read - Mendapatkan Semua Data Kurir
exports.getAllKurir = (req, res) => {
    const query = `SELECT * FROM kurir`;
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(results);
    });
};

// Read - Mendapatkan Satu Kurir Berdasarkan ID
exports.getKurirById = (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM kurir WHERE id = ?`;
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length === 0) {
            return res.status(404).send({ message: 'Kurir tidak ditemukan.' });
        }
        res.status(200).send(result[0]);
    });
};

// Update - Mengupdate Data Kurir
exports.updateKurir = (req, res) => {
    const { id } = req.params;
    const { nama, alamat, telepon } = req.body;

    const query = `UPDATE kurir SET nama = ?, alamat = ?, telepon = ? WHERE id = ?`;
    db.query(query, [nama, alamat, telepon, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'Kurir tidak ditemukan.' });
        }
        res.status(200).send({ message: 'Data kurir berhasil diperbarui.' });
    });
};

// Delete - Menghapus Data Kurir
exports.deleteKurir = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM kurir WHERE id = ?`;
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'Kurir tidak ditemukan.' });
        }
        res.status(200).send({ message: 'Data kurir berhasil dihapus.' });
    });
};
