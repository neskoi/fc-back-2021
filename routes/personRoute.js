const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController')


router.post(
    '/pessoa/cadastro',
    personController.cadastrarPessoa
    );

  router.get(
    '/pessoa/buscar',
    (req, res) => {
      personController.buscarPessoa().then(result => {
        return res.status(200).json({ "data": result })
      })
    },
  );
  
  module.exports = router;