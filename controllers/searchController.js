const express = require('express');
const router = express.Router();
require('dotenv').config();
const request = require('request-promise-native');

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

    res.send("Done");
  }
  catch (err) {
    next(err);
  }
})

router.get('/', async (req,res,next) => {

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  try {
    if (req.query.zipcode && req.query.name) {
      // const suggestion = await request.get({
      //   url: 'https://api.amctheatres.com/v2/location-suggestions/?query='+req.body.zip,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })

      // let url = suggestion._embedded.suggestions[0]._links["https://api.amctheatres.com/rels/v2/locations"].href;
      // let lat = url.slice(url.indexOf('lat')+9,url.indexOf('&'));
      // let long = url.slice(url.indexOf('long')+10,url.length - 1);
      // let today = new Date()
      // let year = today.getFullYear();
      // let day = today.getTime();
      // let month = today.getMonth()+1;
      // url = "https://api.amctheatres.com/v2/showtimes/views/current-location/"+month+"-"+day+"-"+year+"/"+lat+"/"+long

      // const response = await request.get({
      //   url: url,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })



      const response = require('../apidata/locAndNameSearch.js');

      let theatre;
      let url;
      let date;
      let weekDay;
      let month;
      let day;
      let time;
      let dateStr;
      let showtime;

      for (let i = 0; i < response._embedded.showtimes.length; i++) {

        showtime = response._embedded.showtimes[i];

        // url = showtime._links['https://api.amctheatres.com/rels/v2/theatre']

        // theatre = await request.get({
        //  url: url,
        //  headers: {
        //    'X-AMC-Vendor-Key': process.env.API_KEY
        //  },
        //  method: "GET",
        //  json: true
        // })

        theatre = require('../apidata/theatre.js');

        date = new Date(showtime.showDateTimeLocal);

        weekDay = days[date.getDay()];

        day = nth(date.getDate());

        month = months[date.getMonth()];

        time = date.toLocaleTimeString('en-US');
        time = time.slice(0,time.indexOf(':',4)) + time.slice(time.indexOf(':',4)+3);

        dateStr = weekDay+", "+month+" "+day+" "+time;


        response._embedded.showtimes[i].showFormattedDateTime = dateStr;
        response._embedded.showtimes[i].theatre = theatre;
      }

      res.render('search/showtimes.ejs', { 
        response: response._embedded,
      });
    }
    else if (req.query.zipcode) {
      // const suggestion = await request.get({
      //   url: 'https://api.amctheatres.com/v2/location-suggestions/?query='+req.body.zip,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })

      // const response = await request.get({
      //   url: suggestion._embedded.suggestions[0]._links["https://api.amctheatres.com/rels/v2/locations"].href,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })

      const response = require('../apidata/locSearch.js');

      res.render('search/locations.ejs', { 
        response: response._embedded
      });

    }
    else if (req.query.name) {
      // const response = await request.get({
      //   url: 'https://api.amctheatres.com/v2//v2/movies/?name='+req.body.name,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })

      const response = require('../apidata/nameSearch.js');

      res.render('search/movies.ejs', { 
        response: response._embedded
      });
    }
  }
  catch (err) {
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

module.exports = router;