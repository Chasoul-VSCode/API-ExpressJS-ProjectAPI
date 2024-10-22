const dbConnection = require('../config/database');

// Mendapatkan semua pembayaran
exports.getAllPembayaran = (req, res) => {
    dbConnection.query('SELECT * FROM pembayaran', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Kesalahan saat mengambil data pembayaran' });
            console.error('Kesalahan query:', err);
        } else {
            res.json(results);
            console.log('Data pembayaran berhasil diambil');
        }
    });
};

// Mendapatkan pembayaran berdasarkan ID
exports.getPembayaranById = (req, res) => {
    const id = req.params.id;
    dbConnection.query('SELECT * FROM pembayaran WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Kesalahan saat mengambil data pembayaran' });
            console.error('Kesalahan query:', err);
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Pembayaran tidak ditemukan' });
        } else {
            res.json(results[0]);
            console.log('Data pembayaran berhasil diambil');
        }
    });
};

// Membuat pembayaran baru
exports.createPembayaran = (req, res) => {
    const { nomor_invoice, tanggal_pembayaran, jumlah, metode_pembayaran, status } = req.body;
    const query = 'INSERT INTO pembayaran (nomor_invoice, tanggal_pembayaran, jumlah, metode_pembayaran, status) VALUES (?, ?, ?, ?, ?)';
    dbConnection.query(query, [nomor_invoice, tanggal_pembayaran, jumlah, metode_pembayaran, status], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Kesalahan saat membuat pembayaran baru' });
            console.error('Kesalahan query:', err);
        } else {
            res.status(201).json({ message: 'Pembayaran berhasil dibuat', id: result.insertId });
            console.log('Pembayaran baru berhasil dibuat');
        }
    });
};

// Memperbarui pembayaran
exports.updatePembayaran = (req, res) => {
    const id = req.params.id;
    const { nomor_invoice, tanggal_pembayaran, jumlah, metode_pembayaran, status } = req.body;
    const query = 'UPDATE pembayaran SET nomor_invoice = ?, tanggal_pembayaran = ?, jumlah = ?, metode_pembayaran = ?, status = ? WHERE id = ?';
    dbConnection.query(query, [nomor_invoice, tanggal_pembayaran, jumlah, metode_pembayaran, status, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Kesalahan saat memperbarui pembayaran' });
            console.error('Kesalahan query:', err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Pembayaran tidak ditemukan' });
        } else {
            res.json({ message: 'Pembayaran berhasil diperbarui' });
            console.log('Pembayaran berhasil diperbarui');
        }
    });
};

// Menghapus pembayaran
exports.deletePembayaran = (req, res) => {
    const id = req.params.id;
    dbConnection.query('DELETE FROM pembayaran WHERE id = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Kesalahan saat menghapus pembayaran' });
            console.error('Kesalahan query:', err);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Pembayaran tidak ditemukan' });
        } else {
            res.json({ message: 'Pembayaran berhasil dihapus' });
            console.log('Pembayaran berhasil dihapus');
        }
    });
};