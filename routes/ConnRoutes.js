const express = require('express');
const router = express.Router();
const ConnController = require('../controllers/ConnControllers');

// Create a new user
router.post('/users', ConnController.createUser);

// Get all users
router.get('/users', ConnController.getAllUsers);

// Get a single user by id
router.get('/users/:id', ConnController.getUserById);

// Update a user
router.put('/users/:id', ConnController.updateUser);

// Delete a user
router.delete('/users/:id', ConnController.deleteUser);

module.exports = router;

