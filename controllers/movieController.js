const express = require('express');
const router = express.Router();
const Top = require('../apidata/top.js')
const Movie = require('../apidata/movie.js')
const NowPlaying = require('../apidata/movies.js')

router.get('/', async (req, res, next) => {
	try {
		const theMovies = Top._embedded.movies;
		const playingMovies = NowPlaying._embedded.movies;
		// res.send(moviesArr);

		res.render('movies/index.ejs', {
			topMovies: theMovies,
			nowMovies: playingMovies
		})
	} catch(err) {
		next(err)
	}
	
});



// router.get('/:id', async (req, res, next) => {
// 	try {
// 		const moviesArr = Top._embedded.movies;
// 		const foundMovie = 
// 		res.send(foundMovie)
// 	} catch (err) {
// 		next(err)
// 	}
// })



router.get('/:id',(req,res) => {
	// const Movie = require('../apidata/movie.js');

  // const Movie = await Movie.get({
      //   url: 'https://api.amctheatres.com/v2/movies/'+req.params.id,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })
	res.render('movies/show.ejs', {
		movie: Movie
	})
	
})




















module.exports = router;