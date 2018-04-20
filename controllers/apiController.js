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

router.get('/locations/:zip', async (req,res,next) => {
  console.log(process.env.API_KEY);
  try {

    const suggestion = await request.get({
      url: 'https://api.amctheatres.com/v2/location-suggestions/?query='+req.params.zip,
      headers: {
        'X-AMC-Vendor-Key': process.env.API_KEY
      },
      method: "GET",
      json: true
    })

    const response = await request.get({
      url: suggestion._embedded.suggestions[0]._links["https://api.amctheatres.com/rels/v2/locations"].href,
      headers: {
        'X-AMC-Vendor-Key': process.env.API_KEY
      },
      method: "GET",
      json: true
    })

    res.send(response);
  }
  catch (err) {
    next(err)
  }
})


module.exports = router;