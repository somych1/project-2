const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const request = require('request-promise-native');

const User = require('../models/user');
const Wish = require('../models/wishModel');

const errHan = require('../functions/errorHandling.js');

//route for the main login page
router.get('/',(req,res) => {
	try {
	 	let err;
	 	let register;
	 	let destPage;
	 	console.log(req.get('referer'),req.session.dest);
	 	//get the base url of the site
	 	//the 'referer' is used to get whether the user is browsing on http or https
	 	//then req.get('host') is used to get the host name that the user is browsing with
	 	let host;
	 	if (req.get('referer')) {
	 		host = req.get('referer');
	 		host = host.slice(0,host.indexOf('//')+2)+req.get('host');
	 	}

	 	//determine errors to show if they already failed login or registration
		err = req.session.err;
		//determine whether to show the login or registration page
		register = req.session.register;
		req.session.err = null;

		//determine which page to redirect to after the user logs in
		if (req.session && req.session.dest && req.session.dest !== '/' && req.session.dest !== '/logout') {
			destPage = req.session.dest;
		}
		else if (req.get('referer') !== host+'/' && req.get('referer') !== host+'/logout') {
			destPage = req.get('referer');
		}

		//render the login page
		res.render('user/login.ejs', {
			errMessage: err,
			register: register,
			login: true,
			destPage: destPage
		})
	}
	catch(error) {
		errHan.handle(error,req,res,next);
	}
})

//get route for editing a user's account
router.get('/edit', async (req, res, next) => {
	try {
		//find the user
		const foundUser = await User.findOne({'username': req.session.username});
		//render the edit page
		res.render('user/edit.ejs', {
			user: foundUser,
			name: foundUser.username,
			currLoc: req.session.currLoc,
        	login: false,
        	loggedIn: req.session.loggedIn
		})
	} catch (err) {
		next(err)
	}
})

//put route for editing a user
router.put('/', async (req, res, next) => {
	try {
		//find the user to update
		const foundUser = await User.findOne({'username': req.session.username});

		//if they updated the password, then hash it before saving
		if (req.body.password) {
			let { password } = req.body;
			password = bcrypt.hashSync(password,bcrypt.genSaltSync(10))
			req.body.password = password;
		}
		//otherwise, resave the old password to the user
		else {
			req.body.password = foundUser.password;
		}

		//update the user
		const updatedUser = await User.findByIdAndUpdate(foundUser._id, req.body, {new: true});
		
		res.redirect('/')
	} catch (err) {
		errHan.handle(err,req,res,next);
	}
})

//route for logging out
router.get('/logout', (req,res,next) => {
	try {
		//destroy the user's session
		req.session.destroy();
		res.redirect('back');
	}
	catch(err) {
		errHan.handle(err,req,res,next);
	}
})

//post route for creating a user
router.post('/login', async (req,res,next) => {
	try {

		//find the user that's logging in
		const user = await User.findOne({ username: req.body.username })
		
		//check their password
		if (user && bcrypt.compareSync(req.body.password,user.password)) {
			req.session.loggedIn = true;
			req.session.username = req.body.username;
			//redirect the user to page they were on before logging in
			if (req.body.dest) {
				res.redirect(req.body.dest);
			}
			//if there wasn't a destination, default to the home page
			else {
				res.redirect('/movies');
			}
		}
		else {
			req.session.err = "Invalid username and password.",
			req.session.register = false
			res.redirect('/');
		}
	}
	catch (err) {
		errHan.handle(err,req,res,next);
	}
})

//post route for registering a user
router.post('/register', async (req,res,next) => {

	try {
		let dest = req.body.dest;

		//encrypt the password
		let { password } = req.body;
		password = bcrypt.hashSync(password,bcrypt.genSaltSync(10))
		req.body.password = password;

		//check to make sure their username isn't already taken
		const existingUser = await User.findOne({ username: req.body.username });

		if (existingUser) {
			req.session.err = "Couldn't register. Try a different username";
			req.session.register = true;
			res.redirect('/');
		}
		//if everything is ok, create the user
		else {
			const user = await User.create(req.body);

			if (user) {
				req.session.loggedIn = true;
				req.session.username = req.body.username;
				//redirect the user to the page they were on before
				if (dest) {
					req.body.dest = undefined;
					res.redirect(dest);
				}
				//if they was no previous page, go to the home page
				else {
					res.redirect('/movies');
				}
			}
			else {
				req.session.err = "Couldn't register. Try again later.";
				req.session.register = true;
				res.redirect('/');
			}
		}
	}
	catch (err) {
		errHan.handle(err,req,res,next);
	}
})

//route for viewing the user's wishlist
router.get('/wish', async (req, res, next) => {
	try {
		//find the logged in user on the database
		const foundUser = await User.findOne({username: req.session.username})
		
		const wishlist = [];
		
		//look up the movie's data using the API endpoint
		for (let movie of foundUser.wishlist) {
		//const Movie = require('../apidata/movie.js');

		  	const Movie = await request.get({
	        	url: 'https://api.amctheatres.com/v2/movies/'+movie.movieId,
	        	headers: {
	          		'X-AMC-Vendor-Key': process.env.API_KEY
	        	},
	        	method: "GET",
	        	json: true
	      	})

			wishlist.push(Movie);
		}
		//render the wish list
		res.render('user/wish.ejs', {
			user: foundUser,
			wishlist: wishlist,
			currLoc: req.session.currLoc,
        	login: false,
        	loggedIn: req.session.loggedIn
		}) 
	} catch(err){
		errHan.handle(err,req,res,next);
	}
}) 

//route to render the user's watched movies list
router.get('/watched', async (req, res, next) => {
	try {
		//find the logged in user on the database
		const foundUser = await User.findOne({username: req.session.username})
		
		const watched = [];
		
		//load information from the API endpoint for each movie
		for (let movie of foundUser.watched) {

		//const Movie = require('../apidata/movie.js');

		  	let response = await request.get({
	        	url: 'https://api.amctheatres.com/v2/movies/'+movie.movieId,
	        	headers: {
	          		'X-AMC-Vendor-Key': process.env.API_KEY
	        	},
	        	method: "GET",
	        	json: true
	      	})

			watched.push(response);
		}
		//render the watch list
		res.render('user/watched.ejs', {
			user: foundUser,
			watched: watched,
			currLoc: req.session.currLoc,
        	login: false,
        	loggedIn: req.session.loggedIn
		}) 
	} catch(err){
		errHan.handle(err,req,res,next);
	}
})

// post route to move a movie to the user's watched list from their wish list
router.post('/wish/:movieId', async (req,res, next) =>{

	try{
		//find the logged in user
		const foundUser = await User.findOne({username: req.session.username})
		//find the wish list movie to move
		const newWatched = await Wish.findOne({'movieId': req.params.movieId})
		//remove it from the user's wish list
		foundUser.wishlist.splice(foundUser.wishlist.indexOf(newWatched),1)
		//add it to the user's watched list
		foundUser.watched.push(newWatched)
		//save the updated user to the database
		await foundUser.save()
		//redirect back to the wish list
		res.redirect('back')
	} catch(err) {
		errHan.handle(err,req,res,next);
	}
})

// delete a wish list movie
router.delete('/wish/:movieId', async (req, res, next) => {
	try{
		//delete the movie from the wish list	
		const deletedWish = await Wish.findOneAndRemove({'movieId': req.params.movieId});
		//find the user that has the movie on their wish list
		const foundUser = await User.findOne({'username': req.session.username})
		//remove the movie from their wish list
		foundUser.wishlist.splice(foundUser.wishlist.indexOf(deletedWish),1)

		//save the user back to the database
		await foundUser.save();

		//redirect back to wish list
		res.redirect('/wish')
	} catch (err) {
		errHan.handle(err,req,res,next);
	}
})

// delete a user
router.delete('/', async (req, res, next) => {
	//find and remove the user
	const foundUser = await User.findOneAndRemove({'username': req.session.username})

	//destroy the user's wish list movies on the database
	const wishArr = [];
	for (wish of foundUser.wishlist) {
		wishArr.push(wish);
	}
	await Wish.remove({
		_id: {
			$in: wishArr
		}
	})

	//destroy the user's watched list movies on the database
	const watchedArr = [];
	for (watched of foundUser.watched) {
		watchedArr.push(watched);
	}
	await Wish.remove({
		_id: {
			$in: watchedArr
		}
	})

	//destroy the user's session
	req.session.destroy();

	//redirect back to the home page
	res.redirect('/movies')
})

//catch all route that goes to the home page
router.get('*',(req,res) => {
	res.redirect('/movies');
})

module.exports = router;