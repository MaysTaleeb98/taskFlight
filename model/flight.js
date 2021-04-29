const mongoose = require('mongoose')

const FlightSchema = new mongoose.Schema(
    {
        Flight_number: {type: String},
        Airline: {type: String},
        Weekdays: {type: String},
        
    }, {collection: 'flightt'}
)

module.exports = mongoose.model('flightt', FlightSchema);


