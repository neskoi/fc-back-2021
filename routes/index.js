const express = require("express");
const router = express.Router();

const authMiddleware = require('./middlewares/auth')
const homeRoute = require("./homeRoute");
const estimateRoute = require("./estimateRoute");
const studentRoute = require("./studentRoute");
const personRoute = require("./personRoute");
const userRoute = require("./userRoute");
const paymentRoute = require("./paymentRoute");
const bankRoute = require("./bankRoute");
const stateRoute = require("./stateRoute");

router.use(homeRoute)
      .use(estimateRoute)
      .use(studentRoute)
      .use(userRoute)
      .use(authMiddleware)
      .use(personRoute)
      .use(paymentRoute)
      .use(stateRoute)
      .use(bankRoute);


module.exports = router;