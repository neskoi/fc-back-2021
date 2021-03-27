const express = require('express');
const MAX_SIZE = 500000;
const multer = require('multer')({ dest: 'public/uploads/', limits: { fileSize: MAX_SIZE } });
const estimateController = require('../controllers/estimateController');
const router = express.Router();

router.post('/solicitar',  multer.single('proof'), estimateController.create);

module.exports = router;