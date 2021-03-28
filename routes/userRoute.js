const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post(
  '/usuario/cadastro',
  (req, res) => {
    const dataUser = req.body
    userController.cadastrarUser(dataUser)
    res.json({"usuario":"Sucesso!"})
  },
);


router.post(
  '/usuario/login',
  (req, res) => {
    const dataUser = req.body
    userController.login(dataUser).then(result => {
      if (result === true) {
        res.status(200).json({"login":"Sucesso!"})
      } else {
        res.status(400).json({"login":"Falha, Dados incorretos!"})
      }
    })
  },
);

module.exports = router;
