const ErrMod = require('../models/error.js');

module.exports = {
	handle(err,req,res,next) {
		try {
			//create an error object
			let method;
			let url;
			if (err.options) {
				url = err.options.url;
				method = err.options.method;
			}

			newErr = {
				name: err.name,
				message: err.message,
				url: url,
				method: method
			}

			//add the error the database
			ErrMod.create(newErr);

			//render the error page
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