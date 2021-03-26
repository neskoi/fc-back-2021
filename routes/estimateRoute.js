const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({"answer":"Hello World!"}));

module.exports = router;