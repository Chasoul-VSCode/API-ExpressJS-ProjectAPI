const db = require('../config/database');

const ConnController = {
  createUser: (req, res) => {
    const { npm, nama, jurusan, no_hp } = req.body;
    const query = 'INSERT INTO users (npm, nama, jurusan, no_hp) VALUES (?, ?, ?, ?)';
    
    db.query(query, [npm, nama, jurusan, no_hp], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error creating user' });
        return;
      }
      res.status(201).json({ message: 'User created successfully', id: result.insertId });
    });
  },

  getAllUsers: (req, res) => {
    const query = 'SELECT * FROM users';
    
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Error fetching users' });
        return;
      }
      res.status(200).json(results);
    });
  },

  getUserById: (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    
    db.query(query, [id], (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Error fetching user' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json(results[0]);
    });
  },

  // Update a user
  updateUser: (req, res) => {
    const { id } = req.params;
    const { npm, nama, jurusan, no_hp } = req.body;
    const query = 'UPDATE users SET npm = ?, nama = ?, jurusan = ?, no_hp = ? WHERE id = ?';
    
    db.query(query, [npm, nama, jurusan, no_hp, id], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error updating user' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json({ message: 'User updated successfully' });
    });
  },

  // Delete a user
  deleteUser: (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    
    db.query(query, [id], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error deleting user' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json({ message: 'User deleted successfully' });
    });
  }
};

module.exports = ConnController;

