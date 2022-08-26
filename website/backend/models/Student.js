const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
name: {
	type: String
},
phone: {
	type: String
},
email: {
	type: String
}
,
msg: {
	type: String
}
}, {
	collection: 'contact'
})

module.exports = mongoose.model('contact', studentSchema)
