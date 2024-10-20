// controllers/ProductController.js
const dbConnection = require('../config/database');

// Create a new product
exports.createProduct = (req, res) => {
    const { name, jumlah, harga } = req.body;
    const query = 'INSERT INTO product (name, jumlah, harga) VALUES (?, ?, ?)';
    dbConnection.query(query, [name, jumlah, harga], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error creating product' });
        } else {
            res.status(201).json({ message: 'Product created successfully', id: result.insertId });
        }
    });
};

// Read all products
exports.getAllProducts = (req, res) => {
    const query = 'SELECT * FROM product';
    dbConnection.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching products' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Read a single product
exports.getProduct = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM product WHERE id = ?';
    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching product' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

// Update a product
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const { name, jumlah, harga } = req.body;
    const query = 'UPDATE product SET name = ?, jumlah = ?, harga = ? WHERE id = ?';
    dbConnection.query(query, [name, jumlah, harga, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error updating product' });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product updated successfully' });
        }
    });
};

// Delete a product
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM product WHERE id = ?';
    dbConnection.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error deleting product' });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    });
};
