const paymentRepository = require('../repository/paymentRepository');
const stringResponser = require('../utils/stringResponser');
const dateManager = require('../utils/dateManager');

class PaymentService {

    registerPayment = async (req, res) => {
        console.log({...req.body})
        try {
            await paymentRepository.registerPayment({...req.body, data_pagamento: dateManager.timestampForDB()});
            res.json(stringResponser("Success"));
        } catch (error) {
            res.json(stringResponser(error));
        }
    };

    selectAllPaymentFromPerson = async (req, res) => {
       try {
            await paymentRepository.selectAllPaymentFromPerson(req.body);
            res.json(stringResponser("Success"));
        } catch (error) {
            res.json(stringResponser(error));
        }
    };

    selectOnePayment = async (req, res) => {
        try {
            await paymentRepository.selectOnePayment(req.body);
            res.json(stringResponser("Success"));
        } catch (error) {
            res.json(stringResponser(error));
        }
    };

}

module.exports = new PaymentService();
