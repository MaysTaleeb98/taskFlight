const mongoose = require('mongoose')

const Leg_instanceSchema = new mongoose.Schema(
    {
        Flight_number: {type: String},
        Leg_number: {type: Number},
        Date:{type: String},
        Number_of_available_seats: {type: Number},
        Airplane_id:{type: Number},
        Departure_airport_code:  {type: String},
        Departure_time:  {type: String},
        Arrival_airport_code:  {type: String},
        Arrival_time: {type: String},        
    }, {collection: 'leg_instance'}
)

module.exports = mongoose.model('leg_instance', Leg_instanceSchema  );
