const express = require('express');
const multer = require('../config/multer');
const router = express.Router();
const estimateController = require('../controllers/estimateController');

router.post('/estimate-insert',  multer.single('estimate'), estimateController.create);
router.get('/estimate:id', estimateController.showOne);
router.get('/show-all-unpaid-estimate', estimateController.showAllUnpaid);
router.post('/estimate-proof:id', multer.single('proof'), estimateController.purchaseProofInsertion);

module.exports = router;