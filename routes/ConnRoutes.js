<<<<<<< HEAD
=======
// routes/ConnRoutes.js
>>>>>>> d1f7a408441c9b544c24e4dbdeb9340b05991905
const express = require('express');
const router = express.Router();
const ConnController = require('../controllers/ConnController');

router.get('/conn', ConnController.connDB);

module.exports = router;
<<<<<<< HEAD

=======
>>>>>>> d1f7a408441c9b544c24e4dbdeb9340b05991905
