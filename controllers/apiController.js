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

router.get('/search', async (req,res,next) => {
  
  try {
    if (req.body.zipcode && req.body.name) {
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

      res.render('search/showtimes.ejs', { 
        response: response._embedded
      });
    }
    else if (req.body.zipcode) {
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
    else if (req.body.name) {
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

router.get('/movie/:id',(req,res) => {
  // const response = await request.get({
      //   url: 'https://api.amctheatres.com/v2/movies/'+req.params.id,
      //   headers: {
      //     'X-AMC-Vendor-Key': process.env.API_KEY
      //   },
      //   method: "GET",
      //   json: true
      // })
  const response = require('../apidata/movie.js');
})


module.exports = router;