const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async function () {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('MongoDB connected');
        
    } catch (error) {
        console.log('MongoDB connection failed');
    }
}

module.exports = connectDB;