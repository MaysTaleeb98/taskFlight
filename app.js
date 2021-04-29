const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/db');
const path = require('path');
const Flight = require('./model/flight_mod');
const Fare = require('./model/fare');
const Reservations = require('./modeL/seat_reservation');
const Rese = require('./model/rese')


const app = express();



/*
 //funnction that convert csv file to json format
///// require csvtojson module
const csvtojson = require('csvtojson')
const fs = require('fs')

const CSVToJSON = require('csvtojson');

// convert users.csv file to JSON array
CSVToJSON().fromFile('users.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        console.log(users);

        // Write JSON array to a file
        fs.writeFile('out.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });

    }).catch(err => {
        // log error if any
        console.log(err);
    });
// Load Config File
*/
// Connect To Database
db().then();


/* list all flights available in the system 
using this route : http://localhost:5000/flight
*/
app.get('/flight', (req,res) => {
    Flight.find().then(result => {
        res.status('200').json({
            status : 200,
            number_of_results: result.length,
            Flights :result

        });
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    });

});

/*
search for a flight with specific flight number 
using this route : http://localhost:5000/flights?Flight_number=DL1149
*/
app.get('/flights', (req,res) => {
    const searchedFiled = req.query.Flight_number;
    Flight.find({Flight_number: {$regex: searchedFiled}}).then(result => {
        res.status('200').json({
            status : 200,
            number_of_results: result.length,
            Flights :result

        });
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    });

});

/*
list of flights prices using this route: http://localhost:5000/fares
*/

app.get('/fares', (req,res) => {
    Fare.find({}, {Flight_number:1,Fare_code:1,Amount:1}).then(result => {
        res.status('200').json({
            status : 200,
            number_of_results: result.length,
            Flights :result

        });
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    });

});

/*
list  reservations on the system using this route: http://localhost:5000/reservations
*/
app.get('/reservations', (req,res) => {
    Reservations.find({}, {Flight_number:1,Date:1,Seat_number:1,Customer_name:1}).then(result => {
        res.status('200').json({
            status : 200,
            number_of_results: result.length,
            Flights :result

        });
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    });

});

/*
filtering for a customer name using this route: http://localhost:5000/invoice?Customer_name=Osvaldo
*/
app.get('/invoice', (req,res) => {
    const searchedFiled = req.query.Customer_name;

    // step 1: Query the reservations schema for customer name
    // [{flight_number: 123... }] -> map -> [123]
    // step 2: Query the fares table for numbers in [123, ....]
    // step 3: group the two arrays
    // .. [colour: red, foo1: bar], [colour: red, foo: bbar] -> [colour: red. foo1: bar, foo:bbar ]
  

Rese.find({Customer_name: {$regex: searchedFiled}}, {Flight_number:1,Date:1,Fare_code:1,Amount:1}).then(result => {
    res.status('200').json({
        status : 200,
        number_of_results: result.length,
        Flights :result

    });
})
.catch(err=>{
    console.log(err)
    res.status(500).json({
        error: err
    })
});
   
});




// Define Port Number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})