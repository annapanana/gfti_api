const express = require('express');
const router = express.Router();
const knex = require('../knex');
require('dotenv').load();
const request = require('request');

router.post('/', (req, res, next) => {
  const {resource} = req.body,
        url = getResourceMethod(resource)(req.body);

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
    {key: "validate-address", method:validateAddress}
  ]
  return resourceMethods.find(elem => {
    return elem.key === resource
  }).method
}

function getReps(body) {
  const zip = body['params[zip]'];
  return `https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.GOOGLE_API_KEY}&address=${zip}`
}

function validateAddress(body) {
  const address1 = body['params[address][address1]'],
        address2 = body['params[address][address2]'],
        state = body['params[address][state]'],
        city = body['params[address][city]'],
        zip = body['params[address][zip]'];

  return `https://us-street.api.smartystreets.com/street-address?auth-id=${process.env.SMARTY_ID}&auth-token=${process.env.SMARTY_TOKEN}&candidates=10&street=${address1}&street2=${address2}&city=${city}&state=${state}&zipcode=${zip}`;
}


module.exports = router;
