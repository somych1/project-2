const express = require('express');
const router = express.Router();
const Top = require('../apidata/top.js')

router.get('/', async (req, res, next) => {
	try {
		const moviesArr = await Top._embedded.movies;
		// res.send(moviesArr);

		res.render('movies/index.ejs', {
			movie: moviesArr
		})
	} catch(err) {
		next(err)
	}
	
});

























module.exports = router;