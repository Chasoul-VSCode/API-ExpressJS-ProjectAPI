// app.js
const express = require('express');
const ConnRoutes = require('./routes/ConnRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const app = express();

// Middleware untuk mengurai JSON
app.use(express.json());

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
