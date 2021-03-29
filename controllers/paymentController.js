const paymentService =  require('../services/paymentService');

class PaymentController {
    registerPayment = (req, res) => {
       paymentService.registerPayment(req, res);
    };

    selectAllPaymentFromPerson = (req, res) => {
      paymentService.selectAllPaymentFromPerson(req, res);
    };

    selectOnePayment = (req, res) => {
        paymentService.selectOnePayment(req, res);
    };
}

module.exports = new PaymentController();