const mongoose = require('mongoose');
const Wish = require('./wishModel');

module.exports = mongoose.model('User',new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	password: String,
	wishlist: [Wish.schema],
	watched: [Wish.schema]
}))