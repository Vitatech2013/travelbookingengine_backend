import mongoose from 'mongoose'

const schemaTours = new mongoose.Schema({
	tourname:{
		type: String
    },
    source:{
		type: String
    }, 
    destination:{
		type: String
	},
	desc:{
        type: String
		},
	price:{
        type: String
    },

    mobileno: {
        type: String
    }
    }, 
    {
		timestamps: true
	});

const Toursmodel = mongoose.model('Tours', schemaTours)

export default Toursmodel