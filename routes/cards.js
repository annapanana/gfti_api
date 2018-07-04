const express = require('express');
const router = express.Router();
const knex = require('../knex');
const Lob = require('lob')(process.env.LOB_KEY);

router.get('/', (req, res, next) => {
  knex('cards')
    .then(res => {
      if (res.length === 0) {
        return res.send(404);
      }
      res.status(200).send(results)
    })
    // .catch(error => {
    //   return next(error)
    // })
})

router.post('/', (req, res, next) => {
  const {address, bg_img, pc_back} = req.body;
  const card = Lob.postcards.create({
    description: 'Demo Postcard job',
    to: address,
    front: '<html style="padding: 1in; font-size: 50;">Front HTML for {{name}}</html>',
    back: '<html style="padding: 1in; font-size: 20;">Back HTML for {{name}}</html>',
    merge_variables: {
      name: address.name
    }
  }, function (error, results) {
    if (error) {
      return res.send(err)
    } else {
      res.status(200).send(results)
    }
  });
  // knex('cards')
  //   .insert(plant)
  //   .then(results => {
  //     if (results.length === 0) {
  //       return res.send(404);
  //     }
  //     console.log("POST RESULT", results);
  //     res.status(200).send(results)
  //   })
  //   .catch(error => {
  //     return next(error)
  //   })
})

module.exports = router;
