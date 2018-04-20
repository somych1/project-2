const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');

const port = 3000;
const nonAuth = ['/','/login','/register','/logout','/home','/movies'];

require('./db/db');

const authController = require('./controllers/authController');



// middleware
app.use(session({
  secret: 'showtime',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}))


// app.use(function isAuthenticated(req,res,next) {

//   for (let route of nonAuth) {
//     if (req.url === route) {
//       return next();
//     }
//   }

//   if (req.method === "DELETE") {
//     return next();
//   }
//   // CHECK THE USER STORED IN SESSION FOR LOGGEDIN
//   if (req.session.loggedIn) return next();

//   // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM TO THE LOGIN PAGE
//   req.session.register = false;
//   res.redirect('/');
// })
 

app.use('/',authController);

const movieController = require('./controllers/movieController');
app.use('/movies', movieController)










app.listen(port, () => {
  console.log('listening on port ' + port)
})