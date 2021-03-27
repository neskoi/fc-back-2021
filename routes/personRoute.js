const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController')


router.post(
    '/pessoa',
    (req, res) => {
      const dataPessoa = req.body
      personController.cadastrarPessoa(dataPessoa)
      res.json({"usuario":"Sucesso!"})
    },
  );
  
  module.exports = router;