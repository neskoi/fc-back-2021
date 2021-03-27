const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post(
  '/usuario',
  (req, res) => {
    const dataUser = req.body
    userController.cadastrarUser(dataUser)
    res.json({"usuario":"Sucesso!"})
  },
);

module.exports = router;



