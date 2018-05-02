const mongoose = require('mongoose');

const connectStr = process.env.MONGODB_URI;

//connect to the database
mongoose.connect(connectStr);

const db = mongoose.connection;

//if connected, log 'mongoose connected to db' to the console
db.on('connected',() => {
	console.log('mongoose connected to db');
})

//if there was an error, log the error to the console
db.on('error',(err) => {
	console.log('mongoose error',err);
})

//on disconnect, log 'mongoose disconnected' to the console
db.on('disconnected',() => {
	console.log('mongoose disconnected');
})