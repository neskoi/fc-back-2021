const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController')

router.post('/student/:id', studentController.create);

module.exports = router;