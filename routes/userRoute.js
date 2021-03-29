const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post(
  '/usuario/cadastro',
  userController.cadastrarUser
);


router.post(
  '/usuario/login',
  userController.login,
);

module.exports = router;
