const express = require('express');
const router = express.Router();

/*
const nomeDaRota = require("caminhoParaFile");

router.use(nomeDaRota)
      .use(nomeDaRota)
*/

const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");

router.use(homeRoute)
router.use(userRoute)

module.exports = router;