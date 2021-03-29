const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController')


router.get(
    '/banco/buscar',
    (req, res) => {
      bankController.buscarBanco().then(result => {
        return res.status(200).json({ "data": result })
      })
    },
  );
  
  module.exports = router