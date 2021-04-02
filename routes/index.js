const express = require("express");
const router = express.Router();

const estimateRoute = require("./estimateRoute");
const studentRoute = require("./studentRoute");
const userRoute = require("./userRoute");
const authMiddleware = require('./middlewares/auth')
const personRoute = require("./personRoute");
const paymentRoute = require("./paymentRoute");
const schoolRoute = require("./schoolRoute");
const bankRoute = require("./bankRoute");
const stateRoute = require("./stateRoute");

router.use(estimateRoute)
      .use(studentRoute)
      .use(userRoute)
      .use(authMiddleware)
      .use(personRoute)
      .use(paymentRoute)
      .use(schoolRoute)
      .use(bankRoute)
      .use(stateRoute)

module.exports = router;