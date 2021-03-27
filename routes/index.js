const express = require('express');
const router = express.Router();
const homeRoute = require("./homeRoute");
const estimateRoute = require('../routes/estimateRoute');
const studentRoute = require("./studentRoute");

router.use(homeRoute)
      .use(estimateRoute)
      .use(studentRoute)

module.exports = router;