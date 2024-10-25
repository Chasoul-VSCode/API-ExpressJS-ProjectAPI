const express = require('express');
const router = express.Router();
const PembayaranController = require('../controllers/PembayaranController');

// Mendapatkan semua pembayaran
router.get('/pembayaran', PembayaranController.getAllPembayaran);

// Mendapatkan pembayaran berdasarkan ID
router.get('/pembayaran/:id', PembayaranController.getPembayaranById);

// Membuat pembayaran baru
router.post('/pembayaran', PembayaranController.createPembayaran);

// Memperbarui pembayaran
router.put('/pembayaran/:id', PembayaranController.updatePembayaran);

// Menghapus pembayaran
router.delete('/pembayaran/:id', PembayaranController.deletePembayaran);

module.exports = router;