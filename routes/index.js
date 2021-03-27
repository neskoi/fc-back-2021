const express = require('express');
const router = express.Router();

/*
const nomeDaRota = require("caminhoParaFile");

router.use(nomeDaRota)
      .use(nomeDaRota)
*/

const homeRoute = require("./homeRoute");
const studentRoute = require("./studentRoute");

router.use(homeRoute)
router.use(studentRoute)

module.exports = router;