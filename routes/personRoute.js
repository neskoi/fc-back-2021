const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController')


router.post(
    '/pessoa/cadastro',
    (req, res) => {
      const dataPessoa = req.body
      personController.cadastrarPessoa(dataPessoa).then(result => {
        if (result === true) {
          res.status(200).json({ data: "Pessoa cadastrada com sucesso!"})
        } else {
          res.status(400).json({ message: "Falha, dados incorretos!"})
        }
      })
    },
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