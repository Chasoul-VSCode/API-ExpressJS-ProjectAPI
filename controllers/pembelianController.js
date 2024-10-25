const connection = require('../config/connection');

// GET all pembelian
exports.getAllPembelian = (req, res) => {
  connection.query('SELECT * FROM pembelian', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// GET pembelian by id
exports.getPembelianById = (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM pembelian WHERE kd_pembelian = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'Pembelian not found' });
    res.json(results[0]);
  });
};

// POST new pembelian
exports.createPembelian = (req, res) => {
  const newPembelian = req.body;
  connection.query('INSERT INTO pembelian SET ?', newPembelian, (err, results) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: results.insertId, ...newPembelian });
  });
};

// PUT update pembelian
exports.updatePembelian = (req, res) => {
  const { id } = req.params;
  const updatedPembelian = req.body;
  connection.query('UPDATE pembelian SET ? WHERE kd_pembelian = ?', [updatedPembelian, id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Pembelian not found' });
    res.json({ message: 'Pembelian updated successfully' });
  });
};

// DELETE pembelian
exports.deletePembelian = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM pembelian WHERE kd_pembelian = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Pembelian not found' });
    res.json({ message: 'Pembelian deleted successfully' });
  });
};
