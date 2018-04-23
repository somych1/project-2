const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
require('dotenv').config();

const port = process.env.PORT;

let nonAuth = [];
eval('nonAuth = '+process.env.NONAUTH);

require('./db/db');

const authController = require('./controllers/authController');
const searchController = require('./controllers/searchController');


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


app.use(function isAuthenticated(req,res,next) {

  let routeInd;
  let globInds = [];
  let lastInd = 0;
  let nextInd = 0;
  let ok = true;
  let searchInd = 0;
  for (let route of nonAuth) {

    searchInd = 0;
    lastInd = 0;

  	if (req.url === route) {
  		return next();
  	}
    else if (route.indexOf('*') >= 0) {
      do {
        if (lastInd === 0) searchInd = 0;
        else searchInd = lastInd+2;

        nextInd = route.indexOf('/*',searchInd);

        if (nextInd < route.length && nextInd >=0) {

          if (req.url.indexOf(route.slice(searchInd, nextInd)) >= 0) {
            ok = true;
          }
          else if (nextInd != lastInd) {
            ok = false;
          }
        }

        lastInd = nextInd;
      } while (lastInd >= 0 && ok === true)
      
      let slashesInReq = req.url.replace(/[^//]/g, "").length;
      let slashesInRoute = route.replace(/[^//]/g, "").length;
      if (route[route.length - 1] === "*") slashesInRoute--;
      if (ok && (slashesInReq >= slashesInRoute)) return next();
    }
  }

   if (req.method === "DELETE") {
     return next();
   }
   // CHECK THE USER STORED IN SESSION FOR LOGGEDIN
   if (req.session.loggedIn) return next();

   // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM TO THE LOGIN PAGE
   req.session.register = false;
   res.redirect('/');
})
 

app.use('/search',searchController);
app.use('/',authController);

const movieController = require('./controllers/movieController');
app.use('/movies', movieController)




app.listen(port, () => {
  console.log('listening on port ' + port)
})