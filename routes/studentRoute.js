const express = require('express');
const router = express.Router();
const multer = require('../config/multer');

const studentController = require('../controllers/studentController')

router.post('/student/:id', multer.single('avatar'), studentController.create);
router.post('/updateStudent/:id', multer.single('avatar'), studentController.update);

module.exports = router;