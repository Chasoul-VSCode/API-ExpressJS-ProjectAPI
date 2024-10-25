// Import express
const express = require('express');

// Initialize the app
const app = express();

// Import routes
const userRoutes = require('./routes/connRoutes');

// Menambahkan route dasar
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Menggunakan route user
app.use('/', userRoutes);

// Menjalankan server di port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});