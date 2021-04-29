const mongoose = require('mongoose')


const Seat_reservationSchema = new mongoose.Schema(
    {
        Flight_number: {
            type:String
           },
        Leg_number: {type: Number},
        Date:{type: String},
        Seat_number: {type: String},
        Customer_name:{type: String},
        Customer_phone:  {type: String},
        Fare_code: {type: String},
        Amount: {type: Number},
       
              


    }, {collection: 'rese'}
)

module.exports = mongoose.model('rese', Seat_reservationSchema  );