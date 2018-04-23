const mongoose = require('mongoose');

module.exports = mongoose.model('Wish',new mongoose.Schema({
	id: Number,
	name: String,
	poster: String,
	link: String
}))