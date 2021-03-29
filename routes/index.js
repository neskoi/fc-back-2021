const express = require('express');
const router = express.Router();
const authMiddleware = require('./middlewares/auth')

const userRoute = require("./userRoute");
const personRoute = require("./personRoute");
const bankRoute = require("./bankRoute");
const stateRoute = require("./stateRoute");


router.use(userRoute)

router.use(authMiddleware)
router.use(personRoute)
router.use(bankRoute)
router.use(stateRoute)




module.exports = router;