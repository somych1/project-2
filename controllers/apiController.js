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
    if (req.body.zipcode) {
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

      const response = 

    }
    else if (req.body.name) {
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

      const response = 
    }

    

    res.render('search.ejs',{ 
      response: response
    });
  }
  catch (err) {
    next(err)
  }
})


module.exports = router;