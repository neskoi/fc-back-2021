const paymentService =  require('../services/paymentService');

class PaymentController {
    registerPayment = (req, res) => {
       paymentService.registerPayment(req, res);
    };

    selectAllPaymentFromPerson = (req, res) => {
      
    };

    selectOnePayment = (req, res) => {
        
    };
}

module.exports = new PaymentController();