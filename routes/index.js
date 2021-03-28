const express = require('express');
const router = express.Router();

/*
const nomeDaRota = require("caminhoParaFile");

router.use(nomeDaRota)
      .use(nomeDaRota)
*/

const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const personRoute = require("./personRoute");

router.use(homeRoute)
router.use(userRoute)
router.use(personRoute)

module.exports = router;