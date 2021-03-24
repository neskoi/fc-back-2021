const express = require('express');
const router = express.Router();

/*
const nomeDaRota = require("caminhoParaFile");

router.use(nomeDaRota)
      .use(nomeDaRota)
*/

const homeRoute = require("./homeRoute");
router.use(homeRoute)

module.exports = router;