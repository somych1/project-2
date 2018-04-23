const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.get('/',(req,res) => {

	let err = req.session.err;
	let register = req.session.register;
	req.session.err = null;

	res.render('auth/login.ejs', {
		errMessage: err,
		register: register
	})

})

router.get('/logout', (req,res,next) => {
	req.session.destroy();
	res.redirect('/');
})

router.post('/login', async (req,res,next) => {
	try {
		const user = await User.findOne({ username: req.body.username })
		
		if (user && bcrypt.compareSync(req.body.password,user.password)) {
			req.session.loggedIn = true;
			req.session.username = req.body.username;
			if (req.session.from) {
				let dest = req.session.from;
				req.session.from = null;
				res.redirect(dest);
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
				if (req.session.from) {
					let dest = req.session.from;
					req.session.from = null;
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

module.exports = router;