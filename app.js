<<<<<<< HEAD
const express = require('express');
const ConnRoutes = require('./routes/ConnRoutes');
const MhsRoutes = require('./routes/MhsRoutes');
const PembayaranRoutes = require('./routes/PembayaranRoutes'); // Tambahkan baris ini
=======
// app.js
const express = require('express');
const ConnRoutes = require('./routes/ConnRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
>>>>>>> d1f7a408441c9b544c24e4dbdeb9340b05991905
const app = express();

// Middleware untuk mengurai JSON
app.use(express.json());

<<<<<<< HEAD
app.use('/api', ConnRoutes, MhsRoutes, PembayaranRoutes); // Tambahkan PembayaranRoutes

const port = 3000; // Menentukan port untuk server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

module.exports = app;
=======
// Use the routes defined in ConnRoutes and ProductRoutes
app.use('/api', ConnRoutes);
app.use('/api', ProductRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
>>>>>>> d1f7a408441c9b544c24e4dbdeb9340b05991905
