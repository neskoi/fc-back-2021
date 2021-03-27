const express = require('express');
const multer = require('../config/multer');
const router = express.Router();
const estimateController = require('../controllers/estimateController');

router.post('/orcamento-inserir',  multer.single('estimate'), estimateController.create);
router.get('/orcamento:id', estimateController.showOne);
router.get('/orcamento-todos-unpaid', estimateController.showAllUnpaid);
router.post('/orcamento-comprovar:id', multer.single('proof'), estimateController.puchaseProofInsertion);

module.exports = router;