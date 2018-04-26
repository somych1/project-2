const express = require('express');
const router = express.Router();
const Top = require('../apidata/top.js')
const Movie = require('../apidata/movie.js')
const NowPlaying = require('../apidata/movies.js')
const User = require('../models/user.js')
const Wish = require('../models/wishModel.js');
const ComingSoon = require('../apidata/comingSoon.js')


router.get('/contacts', (req, res) => {
	res.render('about/contacts.ejs',{
		currLoc: req.session.currLoc,
      	login: false,
      	loggedIn: req.session.loggedIn,
	})	
})

router.get('/', async (req, res, next) => {
	try {
		const theMovies = Top._embedded.movies;
		const playingMovies = NowPlaying._embedded.movies;
		const coming = ComingSoon._embedded.movies;

		res.render('movies/index.ejs', {
			topMovies: theMovies,
			nowMovies: playingMovies,
			currLoc: req.session.currLoc,
      		login: false,
      		loggedIn: req.session.loggedIn,
			coming: coming
		})
	} catch(err) {
		next(err)
	}
	
});


router.get('/:id', async (req,res, next) => {
	try{
		let addButton = true;
		if (req.session.loggedIn) {
			const foundUser = await User.findOne({'username': req.session.username})
			if(foundUser.wishlist && foundUser.wishlist.length > 0) {
				for(let i = 0; i < foundUser.wishlist.length; i++) {
					if(Movie.id === foundUser.wishlist[i].movieId) {
						addButton = false;
					}
				}
			} else if (foundUser.watched && foundUser.watched.length > 0){
				for(let i = 0; i < foundUser.watched.length; i++) {
					if(Movie.id === foundUser.watched[i].movieId) {
						addButton = false;
					}
				}
			}
		}
		console.log(addButton)
		res.render('movies/show.ejs', {
			button: addButton,
			movie: Movie,
			hasScheduledShowtimes: Movie.hasScheduledShowtimes,
			currLoc: req.session.currLoc,
	        login: false,
	        loggedIn: req.session.loggedIn
		})
	} catch (err) {
		next(err)
	}
	
	// const Movie = require('../apidata/movie.js');

  // const Movie = await Movie.get({
      //   url: 'https://api.amctheatres.com/v2/movies/'+req.params.id,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })
	
	
})


// post
router.post('/', async (req,res, next) =>{

	try{
		const foundUser = await User.findOne({username: req.session.username})
		const newWish = await Wish.create(req.query)
		foundUser.wishlist.push(newWish)
		await foundUser.save()
		res.redirect('back')

	} catch(err) {
		next(err)
	}
})















module.exports = router;