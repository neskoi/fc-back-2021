const express = require('express');
const router = express.Router();
const homeRoute = require("./homeRoute");
const estimateRoute = require('../routes/estimateRoute');

router.use(homeRoute)
      .use(estimateRoute)

module.exports = router;