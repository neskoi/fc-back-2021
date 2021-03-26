const express = require('express');
const router = express.Router();

//(req, res) => res.send('Hello World!') deve ser substituido por sua respectiva controler.
router.get('/', (req, res) => res.json({'login': "ate aqui deu certo"}));

module.exports = router;