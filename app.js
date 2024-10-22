const express = require('express');
const ConnRoutes = require('./routes/ConnRoutes');
const MhsRoutes = require('./routes/MhsRoutes');
const PembayaranRoutes = require('./routes/PembayaranRoutes'); // Tambahkan baris ini
const app = express();

// Middleware untuk mengurai JSON
app.use(express.json());

app.use('/api', ConnRoutes, MhsRoutes, PembayaranRoutes); // Tambahkan PembayaranRoutes

const port = 3000; // Menentukan port untuk server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

module.exports = app;