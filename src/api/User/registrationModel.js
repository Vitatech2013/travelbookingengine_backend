import mongoose from 'mongoose'

const schemaUserSignUp = new mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    password: {
        type: String
    },
    emailid: {
        type: String
    },
    mobileno: {
        type: String
    },
    address: {
        type: String
    }
},
    {
        timestamps: true
    });

const Registrationmodel = mongoose.model('users', schemaUserSignUp)

export default Registrationmodel