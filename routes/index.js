const express = require('express');
const router = express.Router();
const homeRoute = require("./homeRoute");
const estimateRoute = require('../routes/estimateRoute');
const studentRoute = require("./studentRoute");
const personRoute = require("./personRoute");
const userRoute = require("./userRoute");
const schoolRoute = require("./schoolRoute");


router.use(homeRoute)
      .use(estimateRoute)
      .use(studentRoute)
      .use(userRoute)
      .use(personRoute)
      .use(schoolRoute)

module.exports = router;