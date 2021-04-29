const mongoose = require('mongoose');
const fs = require('fs');
const Fare = require('./model/rese');
///


//const { exists } = require('../models/airport');
mongoose.connect('mongodb://localhost:27017/flight', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Read The JSON files
const fare = JSON.parse(fs.readFileSync(`${__dirname}/data/rese.json`, 'utf-8'));

// Import Sample Data In DB
const importDataofFareSchema = async () => {
    try {
        await Fare.create(fare);
        console.log(`Data of Fare successfully imported to Mongodb...`);
        process.exit();
    } catch (err) {
        
        console.log(err);
    }
}
importDataofFareSchema();

/*
// Read The JSON files
const airport = JSON.parse(fs.readFileSync(`${__dirname}/data/airport.json`, 'utf-8'));

// Import Sample Data In DB
const importData = async () => {
    try {
        await Airport.create(airport);
        console.log(`Data of Airport successfully imported to Mongodb...`);
        process.exit();
    } catch (err) {

        console.log(err);
    }
}
 importData(); */