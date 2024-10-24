const express = require('express');
const router = express.Router();
const kurirController = require('../Controllers/connController');

// Route untuk membuat kurir baru
router.post('/kurir', kurirController.createKurir);

// Route untuk mendapatkan semua data kurir
router.get('/kurir', kurirController.getAllKurir);

// Route untuk mendapatkan satu kurir berdasarkan ID
router.get('/kurir/:id', kurirController.getKurirById);

// Route untuk memperbarui kurir
router.put('/kurir/:id', kurirController.updateKurir);

// Route untuk menghapus kurir
router.delete('/kurir/:id', kurirController.deleteKurir);

module.exports = router;
