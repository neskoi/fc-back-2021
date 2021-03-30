const express = require('express');
const router = express.Router();
const authMiddleware = require('./middlewares/auth')
const personRoute = require("./personRoute");
const bankRoute = require("./bankRoute");
const stateRoute = require("./stateRoute");
const userRoute = require("./userRoute");
const schoolRoute = require("./schoolRoute");
const schoolRoute = require("./estimateRoute");
const schoolRoute = require("./studentRoute");

router.use(estimateRoute)
      .use(studentRoute)
      .use(userRoute)
      .use(personRoute)
      .use(schoolRoute)
      .use(authMiddleware)
      .use(bankRoute)
      .use(stateRoute)

module.exports = router;