const mongoose = require('mongoose');

const connectStr = "mongodb://localhost/showtimeapp";

mongoose.connect(connectStr);

const db = mongoose.connection;

db.on('connected',() => {
	console.log('mongoose connected to db');
})

db.on('error',(err) => {
	console.log('mongoose error',err);
})

db.on('disconnected',() => {
	console.log('mongoose disconnected');
})