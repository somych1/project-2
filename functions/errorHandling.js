const ErrMod = require('../models/error.js');

module.exports = {
	handle(err,req,res,next) {
		try {
			newErr = {
				status: '404',
				name: err.name,
				message: err.message,
				url: err.options.url,
				method: err.options.method
			}
			console.log(newErr);
			ErrMod.create(newErr);
			res.render('error.ejs',{
	      		backUrl: '/movies',
	      		login: false,
	      		loggedIn: req.session.loggedIn,
	      		currLoc: req.session.currLoc
	    	});
		}
		catch (error) {
			next(error);
		}
	}
}