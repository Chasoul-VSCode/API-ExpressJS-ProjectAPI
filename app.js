const express = require('express');
const bodyParser = require('body-parser');
const pembelianRoutes = require('./routes/pembelianRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/pembelian', pembelianRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// http://localhost:3000/api/pembelian

