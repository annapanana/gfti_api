const express = require('express');
const router = express.Router();
require('dotenv').load();
// const Lob = require('lob')(process.env.LOB_KEY_PROD);

router.post('/', (req, res, next) => {
  const {name, address1, address2, city, state, zip} = req.body;
  // TODO activate in production
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
  //     res.status(200).send(results)
  //   }
  // });
  res.status(200).send({
    name: "Anna Lotko",
    primary_line: "1214 AUTUMN CT",
    secondary_line: "",
    last_line: "LONGMONT CO 80504-3912"
  })
})

module.exports = router;
