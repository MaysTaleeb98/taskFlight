
const mongoose = require('mongoose')

const FareSchema = new mongoose.Schema(

    {   
        Flight_number: {
            type: String,unique:true,index:true,
            ref: "seat_reservation"
        },
        Fare_code: {type: String},
        Amount: {type: Number},
        Restrictions: {type: String},
      
        
    }, {collection: 'fare'}
)

const fare = module.exports = mongoose.model('fare', FareSchema);