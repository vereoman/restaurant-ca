const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Server is running on PORT ${PORT}`);
});