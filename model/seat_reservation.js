const mongoose = require('mongoose')


const Seat_reservationSchema = new mongoose.Schema(
    {
        Flight_number: {
            type:String},
        Leg_number: {type: Number},
        Date:{type: String},
        Seat_number: {type: String},
        Customer_name:{type: String},
        Customer_phone:  {type: String},
       
              


    }, {collection: 'seat_reservation'}
)

module.exports = mongoose.model('seat_reservation', Seat_reservationSchema  );
