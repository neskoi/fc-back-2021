const express = require('express');
const router = express.Router();

//(req, res) => res.send('Hello World!') deve ser substituido por sua respectiva controler.
router.get('/', (req, res) => res.json({"answer":"Hello World!"}));

module.exports = router;
