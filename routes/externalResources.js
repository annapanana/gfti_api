const express = require('express');
const router = express.Router();
const knex = require('../knex');
require('dotenv').load();
const request = require('request');

router.post('/', (req, res, next) => {
  const {zip, resource} = req.body;
  // TODO - use resource to delegate to methods
  const url = `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.GOOGLE_API_KEY}&address=${zip}`
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.status(200).send(body)
    } else {
      res.status(404).send(error)
    }
  })
})


module.exports = router;
