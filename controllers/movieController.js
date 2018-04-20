const express = require('express');
const router = express.Router();
const Top = require('../apidata/top.js')
const mbi = require('../apidata/movieById.js')

router.get('/', async (req, res, next) => {
	try {
		const moviesArr = Top._embedded.movies;
		// res.send(moviesArr);

		res.render('movies/index.ejs', {
			movie: moviesArr
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
























module.exports = router;