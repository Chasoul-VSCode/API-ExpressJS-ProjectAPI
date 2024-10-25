const express = require('express');
const router = express.Router();
const MhsController = require('../controllers/MhsController');

router.get('/mahasiswa', MhsController.getMahasiswa);

module.exports = router;