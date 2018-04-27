const mongoose = require('mongoose');

module.exports = mongoose.model('Error',new mongoose.Schema({
	status: String,
	name: String,
	message: String,
	url: String,
	method: String
}));