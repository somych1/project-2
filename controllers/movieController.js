const express = require('express');
const router = express.Router();
const Top = require('../apidata/top.js')
const Movie = require('../apidata/movie.js')
const NowPlaying = require('../apidata/movies.js')
const User = require('../models/user.js')
const Wish = require('../models/wishModel.js');
const ComingSoon = require('../apidata/comingSoon.js');
const request = require('request-promise-native');

//route for the contact section
router.get('/contacts', (req, res) => {
	res.render('about/contacts.ejs',{
		currLoc: req.session.currLoc,
      	login: false,
      	loggedIn: req.session.loggedIn,
	})	
})

//route for the movie index - shows the top 10 movies, now playing movies, and coming soon movies
router.get('/', async (req, res, next) => {
	try {
		//Data that will come from an API
		const theMovies = Top._embedded.movies;
		const playingMovies = NowPlaying._embedded.movies;
		const coming = ComingSoon._embedded.movies;

		res.render('movies/index.ejs', {
			topMovies: theMovies,
			nowMovies: playingMovies,
			currLoc: req.session.currLoc,
      		login: false,
      		loggedIn: req.session.loggedIn,
			coming: coming
		})
	} catch(err) {
		next(err)
	}
	
});

//route for the movie show page
router.get('/:id', async (req,res, next) => {
	try{
		//check to see if the user should see the Add button. 
		//If it's already in their list, then they won't.
		//By default, it will show.
		let addButton = true;

		//if they're not logged, we don't need to check
		if (req.session.loggedIn) {
			//find the user in the database
			const foundUser = await User.findOne({'username': req.session.username})
			//check to see if it's in their wishlist
			//if it is, don't show the add button
			if(foundUser.wishlist && foundUser.wishlist.length > 0) {
				for(let i = 0; i < foundUser.wishlist.length; i++) {
					if(Movie.id === foundUser.wishlist[i].movieId) {
						addButton = false;
					}
				}
			} 
			//check to see if it's in their watched list
			//if it is, don't show the add button
			else if (foundUser.watched && foundUser.watched.length > 0){
				for(let i = 0; i < foundUser.watched.length; i++) {
					if(Movie.id === foundUser.watched[i].movieId) {
						addButton = false;
					}
				}
			}
		}
		
		//format the release date and save it back to the movie
		let releaseDate = new Date(Movie.releaseDateUtc);
		releaseDate = getDateStr(releaseDate,true,false,true);
		Movie.releaseDate = releaseDate;

		res.render('movies/show.ejs', {
			button: addButton,
			movie: Movie,
			hasScheduledShowtimes: Movie.hasScheduledShowtimes,
			currLoc: req.session.currLoc,
	        login: false,
	        loggedIn: req.session.loggedIn
		})
	} catch (err) {
		next(err)
	}
	
	// const Movie = require('../apidata/movie.js');

  // const Movie = await request.get({
      //   url: 'https://api.amctheatres.com/v2/movies/'+req.params.id,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })
	
	
})

// theatre get route
router.get('/theatre/:id', async (req,res,next) => {
	try {
		// get the theatre data from the API

		// const theatre = await request.get({
		//	url: 'https://api.amctheatres.com/rels/v2/theatre/'+req.params.id,
        //   headers: {
        //     'X-AMC-Vendor-Key': process.env.API_KEY
        //   },
        //   method: "GET",
        //   json: true
		// })

		const theatre = require('../apidata/theatre.js');

		//format the phone number and save it back to the theatre
		let phone = theatre.guestServicesPhoneNumber
		phone = phone.slice(-10,-7)+"-"+phone.slice(-7,-4)+"-"+phone.slice(-4);

		theatre.phoneNumber = phone;

		//get the showtimes for the theatre from the API
		let showtimes;

      // showtimes = await request.get({
      //   url: "https://api.amctheatres.com/rels/v2/theatres/"+theatre.id+"/showtimes",
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })

        showtimes = require('../apidata/theatreShowtimes.js');
        showtimes = showtimes._embedded.showtimes;

        //format the date and time for the showtime
        let dateObj;
        for (showtime of showtimes) {
          dateObj = new Date(showtime.showDateTimeLocal);

          showtime.showFormattedDate = getDateStr(dateObj);
        }

        theatre.showtimes = showtimes;

		res.render('search/theatre.ejs',{
			theatre: theatre,
			currLoc: req.session.currLoc,
	        login: false,
	        loggedIn: req.session.loggedIn
		})

	}
	catch (err) {
		next(err);
	}
})

// post
router.post('/', async (req,res, next) =>{

	try{
		const foundUser = await User.findOne({username: req.session.username})
		const newWish = await Wish.create(req.query)
		foundUser.wishlist.push(newWish)
		await foundUser.save()
		res.redirect('back')

	} catch(err) {
		next(err)
	}
})

function nth(d) {
  if(d>3 && d<21) return d+'th';
  switch (d % 10) {
        case 1:  return d+"st";
        case 2:  return d+"nd";
        case 3:  return d+"rd";
        default: return d+"th";
    }
}

function getDateStr(date,incTime=true,incWeek=true,incYear=false) {

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let time;
  let dateStr = "";
  let month;
  let day;
  let weekDay;

  if (incWeek) {
  	weekDay = days[date.getDay()];
  	dateStr = weekDay+",";
  }

  day = nth(date.getDate());

  month = months[date.getMonth()];

  dateStr = dateStr+" "+month+" "+day

  if (incYear) {
  	year = date.getFullYear();
  	dateStr = dateStr+" "+year;
  }

  if (incTime) {
    time = getTimeStr(date);
    dateStr = dateStr+" "+time;
  }

  return dateStr;
}

function getTimeStr(date) {
  let time = date.toLocaleTimeString('en-US');
  time = time.slice(0,time.indexOf(':',4)) + time.slice(time.indexOf(':',4)+3);
  return time;
}



module.exports = router;