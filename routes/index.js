const express = require("express");
const router = express.Router();
const homeRoute = require("./homeRoute");
const estimateRoute = require("./estimateRoute");
const studentRoute = require("./studentRoute");
const personRoute = require("./personRoute");
const userRoute = require("./userRoute");
const paymentRoute = require("./paymentRoute");


router.use(homeRoute)
      .use(estimateRoute)
      .use(studentRoute)
      .use(userRoute)
      .use(personRoute)
      .use(paymentRoute);

module.exports = router;