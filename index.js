const config = require('./services/configService');
const express = require('express');
const ipRoutes = require('./routes/ipRoutes');
const historyRoutes = require('./routes/historyRoutes');
const publicIpRoutes = require('./routes/publicIpRoutes');
const app = express();
const port = 3000;

config.validateConfigs();

app.use(express.json());

app.use('/ip',ipRoutes);
app.use('/public-ip',publicIpRoutes);
app.use('/history',historyRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
  

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
