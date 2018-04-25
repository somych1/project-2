const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');
const Wish =require('../models/wishModel')

router.get('/',(req,res) => {

 	let err;
 	let register;
 	let prevPage;

 	if (req.session) {
		err = req.session.err;
		register = req.session.register;
		req.session.err = null;
	}

	if (req.get('referer') !== "http://localhost:3000/") {
		prevPage = req.get('referer')
	}

	res.render('auth/login.ejs', {
		errMessage: err,
		register: register,
		login: true,
		prevPage: prevPage
	})

})

router.get('/logout', (req,res,next) => {
	req.session.destroy();
	
	res.redirect('back');
})

router.post('/login', async (req,res,next) => {
	try {
		console.log(req.body.from,"here");

		const user = await User.findOne({ username: req.body.username })
		
		if (user && bcrypt.compareSync(req.body.password,user.password)) {
			req.session.loggedIn = true;
			req.session.username = req.body.username;
			if (req.body.from) {
				res.redirect(req.body.from);
			}
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
		next(err);
	}
})


router.post('/register', async (req,res,next) => {

	try {
		let dest = req.body.from;
		req.body.from = undefined;

		let { password } = req.body;
		password = bcrypt.hashSync(password,bcrypt.genSaltSync(10))
		req.body.password = password;

		const existingUser = await User.findOne({ username: req.body.username });

		if (existingUser) {
			req.session.err = "Couldn't register. Try a different username";
			req.session.register = true;
			res.redirect('/');
		}
		else {
			const user = await User.create(req.body);

			if (user) {
				req.session.loggedIn = true;
				req.session.username = req.body.username;
				if (dest) {
					res.redirect(dest);
				}
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
		next(err);
	}
})

router.get('/wish', async (req, res, next) => {
	try {
		
		const foundUser = await User.findOne({username: req.session.username})
		
		const wishlist = [];
		
		for (let movie of foundUser.wishlist) {
		const Movie = require('../apidata/movie.js');

	  	// const Movie = await Movie.get({
    //     	url: 'https://api.amctheatres.com/v2/movies/'+movie.id,
    //     	headers: {
    //       		'X-AMC-Vendor-Key': process.env.API_KEY
    //     	},
    //     	method: "GET",
    //     	json: true
    //   	})
			response = Movie
			wishlist.push(response);
		}
		res.render('auth/wish.ejs', {
			user: foundUser,
			wishlist: wishlist,
			currLoc: req.session.currLoc,
        	login: false,
        	loggedIn: req.session.loggedIn
		}) 
	} catch(err){
		next(err)
	}
}) 

// delete button
router.delete('/wish/:movieId', async (req, res, next) => {
	try{	
		const deletedWish = await Wish.findOneAndRemove({'movieId': req.params.movieId});
		const foundUser = await User.findOne({'wishlist.movieId': req.params.movieId})
		console.log(req.params.movieId)
		console.log(deletedWish)
		console.log('------------------------')
		console.log(foundUser)
		foundUser.wishlist.splice(foundUser.wishlist.indexOf(deletedWish),1)
		foundUser.save((err, data) => {
			
		});
		res.redirect('/wish')
	} catch (err) {
		next(err)
	}
})

router.get('*',(req,res) => {
	res.redirect('/');
})

module.exports = router;