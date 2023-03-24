import mongoose from 'mongoose'

const schemaFeedback = new mongoose.Schema({
	username:{
		type: String
	},
	emailid:{
        type: String
		},
	message:{
        type: String
    }
    }, 
    {
		timestamps: true
	});

const Feedbackmodel = mongoose.model('feedbacks', schemaFeedback)

export default Feedbackmodel