const express = require('express');
const router = express.Router();
const knex = require('../knex');
require('dotenv').load();
const request = require('request');

router.post('/', (req, res, next) => {
  const {resource} = req.body;
  const url = getResourceMethod(resource)(req.body);
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.status(200).send(body)
    } else {
      res.status(404).send(error)
    }
  })
})

function getResourceMethod(resource) {
  const resourceMethods = [
    {key: "rep-by-zip", method:getReps},
    {key: "unsplash-photos", method:getUnsplashPhotos}
  ]
  return resourceMethods.find(elem => {
    return elem.key === resource
  }).method
}

function getReps(body) {
  const {zip} = body.params;
  return `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.GOOGLE_API_KEY}&address=${zip}`
}

function getUnsplashPhotos(body) {
  const search = body.params.search_text;

  return `https://api.unsplash.com/search/photos/?query=${search}&per_page=20&client_id=${process.env.UNSPLASH_KEY}`
}

module.exports = router;
