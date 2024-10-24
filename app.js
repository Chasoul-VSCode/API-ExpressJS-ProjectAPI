const express = require('express');
const bodyParser = require('body-parser');
const kurirRoutes = require('./Routes/connRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', kurirRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
