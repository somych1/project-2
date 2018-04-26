const express = require('express');
const router = express.Router();
require('dotenv').config();
const request = require('request-promise-native');
const dateFun = require('../functions/dateFormat.js');

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

    console.log(response);

    res.send(response);
  }
  catch (err) {
    next(err);
  }
})

router.get('/', async (req,res,next) => {

  try {

    if (req.query.lat && req.query.long && req.session && !req.session.currLoc && req.session.loggedIn) {
      req.session.currLoc = {};
      req.session.currLoc.lat = req.query.lat;
      req.session.currLoc.long = req.query.long;
    }

    if (req.query.zipcode) {
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
      // req.query.long = -94.77581;
    }

    if ((req.query.zipcode || req.query.useCurr === "true") && req.query.name) {
     
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
      //let url = "https://api.amctheatres.com/v2/showtimes/views/current-location/"+month+"-"+day+"-"+year+"/"+req.query.lat+"/"+req.query.long+"?movie="+req.query.name
      let url = "https://api.amctheatres.com/v2/locations?latitude="+req.query.lat+"&longitude="+req.query.long;

      const response = await request.get({
        url: url,
        headers: {
          'X-AMC-Vendor-Key': process.env.API_KEY
        },
        method: "GET",
        json: true
      })

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

        let dateObj;
        for (showtime of showtimes) {
          dateObj = new Date(showtime.showDateTimeLocal);

          showtime.showFormattedDate = dateFun.getDateStr(dateObj);
        }

        response._embedded.locations[i]._embedded.theatre.showtimes = showtimes;

      }

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
    else if (req.query.zipcode || req.query.useCurr === "true") {

      const response = await request.get({
        url: "https://api.amctheatres.com/v2/locations?latitude="+req.query.lat+"&longitude="+req.query.long,
        headers: {
          'X-AMC-Vendor-Key': process.env.API_KEY
        },
        method: "GET",
        json: true
      })

      //const response = require('../apidata/locSearch.js');

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

        let dateObj;
        for (showtime of showtimes) {
          dateObj = new Date(showtime.showDateTimeLocal);

          showtime.showFormattedDate = dateFun.getDateStr(dateObj);
        }

        response._embedded.locations[i]._embedded.theatre.showtimes = showtimes;

      }

      res.render('search/locations.ejs', { 
        response: response._embedded,
        login: false,
        loggedIn: req.session.loggedIn,
        currLoc: req.session.currLoc
      });

    }
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
    next(err)
  }
})

router.get('/movie/:id', async (req,res,next) => {
  try {
    if (req.query.useCurrForShow === 'true') {

      if (req.query.lat && req.query.long && req.session && !req.session.currLoc && req.session.loggedIn) {
        req.session.currLoc = {};
        req.session.currLoc.lat = req.query.lat;
        req.session.currLoc.long = req.query.long;
      }
    }
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
    let url = "https://api.amctheatres.com/v2/locations?latitude="+req.query.lat+"&longitude="+req.query.long

    const response = await request.get({
      url: url,
      headers: {
        'X-AMC-Vendor-Key': process.env.API_KEY
      },
      method: "GET",
      json: true
    })

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

      let dateObj;
      for (showtime of showtimes) {
        dateObj = new Date(showtime.showDateTimeLocal);

        showtime.showFormattedDate = dateFun.getDateStr(dateObj);
      }

      response._embedded.locations[i]._embedded.theatre.showtimes = showtimes;

    }

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
    next(err);
  }
})



module.exports = router;