const express = require('express');
const router = express.Router();
const knex = require('../knex');
require('dotenv').load();
const Lob = require('lob')(process.env.LOB_KEY);
const fs = require('fs');

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
  console.log("POST CARD");
  const {address, bg_img, pc_back} = req.body;
  // image_url
  // greetings_text
  let postcard_front = fs.readFileSync(__dirname + `/../public/templates/basic_postcard.html`, { encoding: 'utf-8' });
  console.log(postcard_front);
  const card = Lob.postcards.create({
    description: 'Demo Postcard job',
    to: address,
    front: postcard_front,
    back: '<html style="padding: 1in; font-size: 20;">Back HTML for {{name}}</html>',
    merge_variables: {
      name: address.name,
      image_url: bg_img,
      greetings_text: "Hello World!"
    }
  }, function (error, result) {
    console.log("ERROR", error);
    console.log("RESULT", result);
    if (error) {
      return res.send(error)
    } else {
      res.status(200).send(result)
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
