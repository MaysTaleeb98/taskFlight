const mongoose = require('mongoose');

const connectDatabase = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/flight', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDatabase;