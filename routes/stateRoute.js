const express = require('express');
const router = express.Router();
const stateController = require('../controllers/stateController')


router.get(
    '/estado/buscar',
    (req, res) => {
      stateController.buscarEstados().then(result => {
        return res.status(200).json({ "data": result })
      })
    },
  );
  
  module.exports = router;