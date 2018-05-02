require('dotenv').config();
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');


const PORT = 4000;

//white list routes that we can go to without authentication
//a black list would have been smaller but a white list was used so that routes would default to requiring authentication
const nonAuth = [{route: '/'},{route: '/login'},{route: '/register'},{route: '/logout'},{route: '/login',method: 'POST'},{route: '/register', method: 'POST'},{route: '/search/*'},{route: '/movies/*'},{route: '/contacts'}];

//connect to the database
require('./db/db');

//load our controllers
const userController = require('./controllers/userController');
const searchController = require('./controllers/searchController');
const movieController = require('./controllers/movieController');

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

//create authentication middleware
app.use(function isAuthenticated(req,res,next) {

  // CHECK THE USER STORED IN SESSION FOR LOGGEDIN
  if (req.session.loggedIn) return next();

  //check to see if we're using a white listed route
  let routeInd;
  let globInds = [];
  let lastInd = 0;
  let nextInd = 0;
  let ok = true;
  let searchInd = 0;
  let route;
  let method;
  for (let whitelist of nonAuth) {

    route = whitelist.route;
    method = whitelist.method;

    searchInd = 0;
    lastInd = 0;

    if (!method) method = "GET";

  	if (req.url === route && req.method === method) {
      return next();
  	}

    //check to see if we match one of the white listed routes that uses a glob
    else if (route.indexOf('*') >= 0 && req.method === method) {

      //grab each part of the white listed route between the globs and make sure that it's in the destination route
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
      
      //make sure that the destination route has more slashes(/) than the white listed route
      //that way the destination route has to contain all of the white listed route
      let slashesInReq = req.url.replace(/[^//]/g, "").length;
      let slashesInRoute = route.replace(/[^//]/g, "").length;
      if (route[route.length - 1] === "*") slashesInRoute--;
      if (ok && (slashesInReq >= slashesInRoute)) return next();
    }
  }

 // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM TO THE LOGIN PAGE
 req.session.register = false;
 req.session.err = "You must login to take that action."
 if (req.method === "GET" && req.url !== "/favicon.ico") req.session.dest = req.url;
 res.redirect('/');
})

//use our controllers
app.use('/search',searchController);
app.use('/movies', movieController);
app.use('/',userController);

//run the server on the specified port
const server = app.listen(process.env.PORT || PORT, () => {
  console.log('server is listening on ' + process.env.PORT || PORT);
})
