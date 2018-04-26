const mongoose = require('mongoose');

module.exports = mongoose.model('Wish',new mongoose.Schema({
	movieId: Number,
	name: String,
	poster: String,
	link: String,
	hasScheduledShowtimes: Boolean
}))