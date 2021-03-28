const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController')


router.post(
    '/pessoa',
    (req, res) => {
      const dataPessoa = req.body
      personController.cadastrarPessoa(dataPessoa).then(result => {
        if (result === true) {
          res.status(200).json({"usuario":"Sucesso!"})
        } else {
          res.status(400).json({"usuario":"Falha, Dados incorretos!"})
        }
      })
    },
  );
  
  module.exports = router;