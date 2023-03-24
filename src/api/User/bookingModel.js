import mongoose from 'mongoose'

const schemaBooking = new mongoose.Schema({

    userno: {
        type: String
    },
    date: {
        type: String
    },
    source: {
        type: String
    },
    destination: {
        type: String
    },
    tourname: {
        type: String
    },
    desciption: {
        type: String
    },
    price: {
        type: String
    },
    noofdays: {
        type: String
    },
    totalamount: {
        type: String
    },
    dateofjourney: {
        type: String
    }
},
    {
        timestamps: true
    });

const Bookingmodel = mongoose.model('Bookings', schemaBooking)

export default Bookingmodel