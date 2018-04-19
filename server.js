const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');

const port = 3000;

require('./db/db');

app.use(session({
	secret: 'this would be some random string you would store',
	resave: false,
	saveUninitialized: false,
	cookie: { secure: false }
}))


// middleware
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}))


// app.use((req, res, next) => {
// 	// check if they are logged in if they are going to the articles
// 	// or authors controllers if not send them back to the login and leave a
// 	// message at
// 	console.log(req.path)
// 	if(req.path.includes('authors') || req.path.includes('articles')){
// 		if(req.session.logged){
// 			next()
// 		} else {
// 			// res.session.message = 'you need to be logged'
// 			res.redirect('/')
// 		}
// 	} else {
// 		next()
// 	}
// })











app.listen(port, () => {
	console.log('lictening on port ' + port)
})