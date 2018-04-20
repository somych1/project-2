const mongoose = require('mongoose');
//const Movie = require('./movie');

module.exports = mongoose.model('User',new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		require: true
	},
	password: String,
	preferredZip: String,
	//wishlist: [Movie.schema]
}))