const express = require('express');
const router = express.Router();
require('dotenv').config();
const request = require('request-promise-native');
const dateFun = require('../functions/dateFormat.js');
const errHan = require('../functions/errorHandling.js');

//router for testing whether the API is working
router.get('/test', async (req,res,next) => {
  try {
    const response = await request.get({
      url: 'https://api.amctheatres.com/v2/locations?latitude=38.9194&longitude=-94.6477',
      headers: {
        'X-AMC-Vendor-Key': process.env.API_KEY
      },
      method: "GET",
      json: true
    })

    res.send(response);
  }
  catch (err) {
    errHan.handle(err,req,res,next);
  }
})

//router for any search that the user does from the search form in the header
router.get('/', async (req,res,next) => {

  try {

    //if the user's location was loaded successfully from their IP and they have a session, then save the location to the session
    if (req.query.lat && req.query.long && req.session && !req.session.currLoc && req.session.loggedIn) {
      req.session.currLoc = {};
      req.session.currLoc.lat = req.query.lat;
      req.session.currLoc.long = req.query.long;
    }

    //if the user entered a zipcode, get their latitude and logitude using the AMC API
    if (req.query.zipcode) {
      const suggestion = await request.get({
        url: 'https://api.amctheatres.com/v2/location-suggestions/?query='+req.query.zipcode,
        headers: {
          'X-AMC-Vendor-Key': process.env.API_KEY
        },
        method: "GET",
        json: true
      })

      //slice the lat and long from the returned url suggestion so that we can use it later
      let url = suggestion._embedded.suggestions[0]._links["https://api.amctheatres.com/rels/v2/locations"].href;
      req.query.lat = url.slice(url.indexOf('lat')+9,url.indexOf('&'));
      req.query.long = url.slice(url.indexOf('long')+10,url.length - 1);
      
      //Old testing data from before we had the API
      // req.query.lat = 38.860511;
      // req.query.long = -94.77581;
    }

    //if the user entered a location and a name, search for showtimes for that movie in theatres in that region
    if ((req.query.zipcode || req.query.useCurr === "true") && req.query.name) {
      //format the date for the API endpoint call
      let date;
      if (!req.query.date) {
        date = new Date()
      }
      else {
        date = new Date(req.query.date)
      }
      let year = date.getFullYear();
      let day = date.getDate();
      let month = date.getMonth()+1;

      //The endpoint we originally planned to use. It's broken
      //let url = "https://api.amctheatres.com/v2/showtimes/views/current-location/"+month+"-"+day+"-"+year+"/"+req.query.lat+"/"+req.query.long+"?movie="+req.query.name
      
      //Get the theatre locations
      let url = "https://api.amctheatres.com/v2/locations?latitude="+req.query.lat+"&longitude="+req.query.long;

      const response = await request.get({
        url: url,
        headers: {
          'X-AMC-Vendor-Key': process.env.API_KEY
        },
        method: "GET",
        json: true
      })

      //get showtimes for the entered movie at the theatres we found
      let showtimes;
      let theatre;
      for (let i = 0;i < response._embedded.locations.length; i++) {

        theatre = response._embedded.locations[i]._embedded.theatre;

        showtimes = await request.get({
          url: "https://api.amctheatres.com/v2/theatres/"+theatre.id+"/showtimes?movie="+req.query.name,
          headers: {
            'X-AMC-Vendor-Key': process.env.API_KEY
          },
          method: "GET",
          json: true
        })

        //showtimes = require('../apidata/theatreShowtimes.js');
        showtimes = showtimes._embedded.showtimes;

        //Format the date for the showtime
        let dateObj;
        for (showtime of showtimes) {
          dateObj = new Date(showtime.showDateTimeLocal);

          showtime.showFormattedDate = dateFun.getDateStr(dateObj);
        }

        //save everything back to the response object
        response._embedded.locations[i]._embedded.theatre.showtimes = showtimes;

      }

      //render showtimes for the user
      res.render('search/locations.ejs', { 
        response: response._embedded,
        login: false,
        loggedIn: req.session.loggedIn,
        currLoc: req.session.currLoc
      });

      //const response = require('../apidata/locAndNameSearch.js');

      //Not using this because the current-location API isn't working

      // let theatre;
      // url;
      // let time;
      // let dateUrl = '/search'+req.url;
      // let indOfDtQuer = dateUrl.indexOf('&date=');
      // if (indOfDtQuer >= 0) {
      //   dateUrl = dateUrl.slice(0,indOfDtQuer)+dateUrl.slice(dateUrl.indexOf('-',indOfDtQuer+10)+5);
      // }
      // let dateStr;
      // let showtime;
      // let prevDate;

      // if (date.toString().slice(0,15) === (new Date()).toString().slice(0,15)) {
      //   dateStr = "Today";
      // }
      // else {

      //   dateStr = dateFun.getDateStr(date,false)

      //   date.setDate(date.getDate()-1);
      //   year = date.getFullYear();
      //   day = date.getDate();
      //   month = date.getMonth()+1;
      //   prevDate = dateUrl+'&date='+month+"-"+day+"-"+year;
      //   date.setDate(date.getDate()+1);
        
      // }

      // date.setDate(date.getDate()+1);
      // year = date.getFullYear();
      // day = date.getDate();
      // month = date.getMonth()+1;
      // let nextDate = dateUrl+'&date='+month+"-"+day+"-"+year;

      // let dateObj;

      // for (let i = 0; i < response._embedded.showtimes.length; i++) {

      //   showtime = response._embedded.showtimes[i];

      //   url = showtime._links['https://api.amctheatres.com/rels/v2/theatre']

      //   theatre = await request.get({
      //    url: url,
      //    headers: {
      //      'X-AMC-Vendor-Key': process.env.API_KEY
      //    },
      //    method: "GET",
      //    json: true
      //   })

      //   //theatre = require('../apidata/theatre.js');

      //   dateObj = new Date(showtime.showDateTimeLocal);

      //   time = dateFun.getTimeStr(dateObj)

      //   response._embedded.showtimes[i].showFormattedTime = time;
      //   response._embedded.showtimes[i].theatre = theatre;
      // }

      // res.render('search/showtimes.ejs', { 
      //   response: response._embedded,
      //   prevDate: prevDate,
      //   nextDate: nextDate,
      //   date: dateStr,
      //   currLoc: req.session.currLoc,
      //   login: false,
      //   loggedIn: req.session.loggedIn
      // });
    }

    //if the use entered just a location, show them theatres in the location and all showtimes for those theatres
    else if (req.query.zipcode || req.query.useCurr === "true") {

      //load the theatres
      const response = await request.get({
        url: "https://api.amctheatres.com/v2/locations?latitude="+req.query.lat+"&longitude="+req.query.long,
        headers: {
          'X-AMC-Vendor-Key': process.env.API_KEY
        },
        method: "GET",
        json: true
      })

      //const response = require('../apidata/locSearch.js');

      //find showtimes at the loaded theatres
      let showtimes;
      let theatre;
      for (let i = 0;i < response._embedded.locations.length; i++) {

        theatre = response._embedded.locations[i]._embedded.theatre;

        showtimes = await request.get({
          url: "https://api.amctheatres.com/v2/theatres/"+theatre.id+"/showtimes",
          headers: {
            'X-AMC-Vendor-Key': process.env.API_KEY
          },
          method: "GET",
          json: true
        })

        //showtimes = require('../apidata/theatreShowtimes.js');
        showtimes = showtimes._embedded.showtimes;

        //format the dates and times for the showtimes
        let dateObj;
        for (showtime of showtimes) {
          dateObj = new Date(showtime.showDateTimeLocal);

          showtime.showFormattedDate = dateFun.getDateStr(dateObj);
        }

        //save everything back to the list of theatres
        response._embedded.locations[i]._embedded.theatre.showtimes = showtimes;

      }

      //render the theatre search results
      res.render('search/locations.ejs', { 
        response: response._embedded,
        login: false,
        loggedIn: req.session.loggedIn,
        currLoc: req.session.currLoc
      });

    }

    //If the user just entered a movie name, show them movies with that name
    else if (req.query.name) {
      const response = await request.get({
        url: 'https://api.amctheatres.com/v2/movies/?name='+req.query.name,
        headers: {
          'X-AMC-Vendor-Key': process.env.API_KEY
        },
        method: "GET",
        json: true
      })
      //const response = require('../apidata/nameSearch.js');

      res.render('search/movies.ejs', { 
        response: response._embedded,
        login: false,
        loggedIn: req.session.loggedIn,
        currLoc: req.session.currLoc
      });
    }
  }
  catch (err) {
    errHan.handle(err,req,res,next);
  }
})

//route to handle any showtime searches directly from a movie show page
router.get('/movie/:id', async (req,res,next) => {
  try {
    //if they used their current location, save that location to their session
    if (req.query.useCurrForShow === 'true') {

      if (req.query.lat && req.query.long && req.session && !req.session.currLoc && req.session.loggedIn) {
        req.session.currLoc = {};
        req.session.currLoc.lat = req.query.lat;
        req.session.currLoc.long = req.query.long;
      }
    }
    //Otherwise, calculate the latitude and longitude to search based on the location they entered
    else {
      const suggestion = await request.get({
        url: 'https://api.amctheatres.com/v2/location-suggestions/?query='+req.query.zipcode,
        headers: {
          'X-AMC-Vendor-Key': process.env.API_KEY
        },
        method: "GET",
        json: true
      })

      let url = suggestion._embedded.suggestions[0]._links["https://api.amctheatres.com/rels/v2/locations"].href;
      req.query.lat = url.slice(url.indexOf('lat')+9,url.indexOf('&'));
      req.query.long = url.slice(url.indexOf('long')+10,url.length - 1);
      // req.query.lat = 38.860511;
      //req.query.long = -94.77581;
    }

    //format the date for use in the showtime search endpoint
    if (!req.query.date) {
      date = new Date()
    }
    else {
      date = new Date(req.query.date)
    }
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth()+1;

    //Not using this url because the current-location API isn't working
    //let url = "https://api.amctheatres.com/v2/showtimes/views/current-location/"+month+"-"+day+"-"+year+"/"+req.query.lat+"/"+req.query.long+"?movie-id="+req.params.id
    
    //Look for theatres in the selected location
    let url = "https://api.amctheatres.com/v2/locations?latitude="+req.query.lat+"&longitude="+req.query.long

    const response = await request.get({
      url: url,
      headers: {
        'X-AMC-Vendor-Key': process.env.API_KEY
      },
      method: "GET",
      json: true
    })

    //Find showtimes for the selected movie at the theatres returned by the location search
    let showtimes;
    let theatre;
    for (let i = 0;i < response._embedded.locations.length; i++) {

      theatre = response._embedded.locations[i]._embedded.theatre;

      showtimes = await request.get({
        url: "https://api.amctheatres.com/v2/theatres/"+theatre.id+"/showtimes?movie-id="+req.params.id,
        headers: {
          'X-AMC-Vendor-Key': process.env.API_KEY
        },
        method: "GET",
        json: true
      })

      //showtimes = require('../apidata/theatreShowtimes.js');
      showtimes = showtimes._embedded.showtimes;

      //format the date and time for each showtime
      let dateObj;
      for (showtime of showtimes) {
        dateObj = new Date(showtime.showDateTimeLocal);

        showtime.showFormattedDate = dateFun.getDateStr(dateObj);
      }

      //save everything back to the array of theatre objects
      response._embedded.locations[i]._embedded.theatre.showtimes = showtimes;

    }

    //render the showtime results
    res.render('search/locations.ejs', { 
      response: response._embedded,
      login: false,
      loggedIn: req.session.loggedIn,
      currLoc: req.session.currLoc
    });

    //const response = require('../apidata/locAndNameSearch.js');

    //Not using currently because the current-location API isn't working

    // let theatre;
    // url;
    // let dateUrl = '/search'+req.url;
    // let indOfDtQuer = dateUrl.indexOf('&date=');
    // if (indOfDtQuer >= 0) {
    //   dateUrl = dateUrl.slice(0,indOfDtQuer)+dateUrl.slice(dateUrl.indexOf('-',indOfDtQuer+10)+5);
    // }

    // let time;
    // let dateStr;
    // let showtime;
    // let prevDate;

    // if (date.toString().slice(0,15) === (new Date()).toString().slice(0,15)) {
    //   dateStr = "Today";
    // }
    // else {

    //   dateStr = dateFun.getDateStr(date,false)

    //   date.setDate(date.getDate()-1);
    //   year = date.getFullYear();
    //   day = date.getDate();
    //   month = date.getMonth()+1;
    //   prevDate = dateUrl+'&date='+month+"-"+day+"-"+year;
    //   date.setDate(date.getDate()+1);
      
    // }

    // date.setDate(date.getDate()+1);
    // year = date.getFullYear();
    // day = date.getDate();
    // month = date.getMonth()+1;
    // let nextDate = dateUrl+'&date='+month+"-"+day+"-"+year;

    // let dateObj;

    // for (let i = 0; i < response._embedded.showtimes.length; i++) {

    //   showtime = response._embedded.showtimes[i];

    //   url = showtime._links['https://api.amctheatres.com/rels/v2/theatre']

    //   theatre = await request.get({
    //    url: url,
    //    headers: {
    //      'X-AMC-Vendor-Key': process.env.API_KEY
    //    },
    //    method: "GET",
    //    json: true
    //   })

    //   //theatre = require('../apidata/theatre.js');

    //   dateObj = new Date(showtime.showDateTimeLocal);

    //   time = dateFun.getTimeStr(dateObj)

    //   response._embedded.showtimes[i].showFormattedTime = time;
    //   response._embedded.showtimes[i].theatre = theatre;
    // }

    // res.render('search/showtimes.ejs', { 
    //   response: response._embedded,
    //   prevDate: prevDate,
    //   nextDate: nextDate,
    //   date: dateStr,
    //   currLoc: req.session.currLoc,
    //   login: false,
    //   loggedIn: req.session.loggedIn
    // });
  }
  catch (err) {
    errHan.handle(err,req,res,next);
  }
})



module.exports = router;