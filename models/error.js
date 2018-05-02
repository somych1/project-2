const mongoose = require('mongoose');

module.exports = mongoose.model('Error',new mongoose.Schema({
	name: String,
	message: String,
	url: String,
	method: String
}));