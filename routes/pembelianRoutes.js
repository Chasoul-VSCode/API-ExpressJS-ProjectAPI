const express = require('express');
const router = express.Router();
const pembelianController = require('../controllers/pembelianController');

// GET all pembelian
router.get('/', pembelianController.getAllPembelian);

// GET pembelian by id
router.get('/:id', pembelianController.getPembelianById);

// POST new pembelian
router.post('/', pembelianController.createPembelian);

// PUT update pembelian
router.put('/:id', pembelianController.updatePembelian);

// DELETE pembelian
router.delete('/:id', pembelianController.deletePembelian);

module.exports = router;

