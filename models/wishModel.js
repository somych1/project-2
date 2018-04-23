const mongoose = require('mongoose');

module.exports = mongoose.model('Wish',new mongoose.Schema({
	name: String,
	link: String
}))