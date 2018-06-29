const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('plants')
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      res.status(200).send(results)
    })
    .catch(error => {
      return next(error)
    })
})

router.post('/', (req, res, next) => {
  const {plant} = req.body;
  knex('plants')
    .insert(plant)
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      console.log("POST RESULT", results);
      res.status(200).send(results)
    })
    .catch(error => {
      return next(error)
    })
})

module.exports = router;
