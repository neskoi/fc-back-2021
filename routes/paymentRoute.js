const express = require('express');
const router = express.Router();
const paymentController =  require('../controllers/paymentController');

router.post('/pay', paymentController.registerPayment);
router.get('/one-payment:id', paymentController.selectOnePayment);
router.get('/all-payment-from-one-person:id', paymentController.selectAllPaymentFromPerson);

module.exports = router;