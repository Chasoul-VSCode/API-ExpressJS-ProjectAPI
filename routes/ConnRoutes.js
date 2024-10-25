const express = require('express');
const router = express.Router();
const ConnController = require('../controllers/ConnControllers');

router.post('/users', ConnController.createUser);
router.get('/users', ConnController.getAllUsers);
router.get('/users/:id', ConnController.getUserById);
router.put('/users/:id', ConnController.updateUser);
router.delete('/users/:id', ConnController.deleteUser);
module.exports = router;

