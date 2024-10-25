const express = require('express');
const router = express.Router();
const connController = require('../controllers/connController');

router.get('/mahasiswa', connController.getAllUsers);

module.exports = router;