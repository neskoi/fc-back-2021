const express = require('express');
const router = express.Router();
const paymentController =  require('../controllers/paymentController');

router.post('/payment-execute-delay', paymentController.registerPayment);



module.exports = router;