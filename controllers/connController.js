const connection = require('../config/db');

exports.getAllUsers = (req, res) => {
  connection.query('SELECT * FROM mahasiswa', (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving data from database.');
    }
    res.json(results);
  });
};

exports.addUser = (req, res) => {
  const newUser = req.body; // Pastikan body parser digunakan
  connection.query('INSERT INTO mahasiswa SET ?', newUser, (err, results) => {
    if (err) {
      return res.status(500).send('Error adding user to database.');
    }
    res.status(201).send(`User added with ID: ${results.insertId}`);
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  connection.query('UPDATE mahasiswa SET ? WHERE id = ?', [updatedUser, id], (err, results) => {
    if (err) {
      return res.status(500).send('Error updating user in database.');
    }
    res.send('User updated successfully.');
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM mahasiswa WHERE id = ?', id, (err, results) => {
    if (err) {
      return res.status(500).send('Error deleting user from database.');
    }
    res.send('User deleted successfully.');
  });
};
