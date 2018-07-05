const express = require('express');
const router = express.Router();
require('dotenv').load();
// const Lob = require('lob')(process.env.LOB_KEY_PROD);

router.post('/', (req, res, next) => {
  const {name, address1, address2, city, state, zip} = req.body;
  // TODO activate in production and format response to hardcoded response below
  // Lob.usVerifications.verify({
  //   primary_line: address1,
  //   secondary_line: address2,
  //   city: city,
  //   state: state,
  //   zip_code: zip
  // }, function (error, results) {
  //   if (error) {
  //     return res.send(err)
  //   } else {
  //     console.log(results);
  //     res.status(200).send(results)
  //   }
  // });
  res.status(200).send({
    name: "Anna Lotko",
    // primary_number, street_name, street_suffex
    address_line1: "1214 AUTUMN CT",
    // ???
    address_line2: "",
    // city
    address_city: "Longmont",
    // state
    address_state: "CO",
    // zip_code
    address_zip: "80504s"
  })
})

module.exports = router;
