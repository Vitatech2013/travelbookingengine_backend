import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
	username:{
		type:String
	},
	password:{
        type: String
		},
		emailid:{
			type: String
			}
	}, {
		timestamps: true
	});

const model = mongoose.model('admins', adminSchema)

export default model