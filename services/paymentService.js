const paymentRepository = require('../repository/paymentRepository');
const stringResponser = require('../utils/stringResponser');
const dateManager = require('../utils/dateManager');

class PaymentService {

    registerPayment = async (req, res) => {
        try {
            await paymentRepository.registerPayment({...req.body, data_pagamento: dateManager.timestampForDB()});
            res.json(stringResponser("Success"));
        } catch (error) {
            res.json(stringResponser(error));
        }
    };

    selectAllPaymentFromPerson = async (req, res) => {
       try {
            const response = await paymentRepository.selectAllPaymentFromPerson({fk_pessoa_doador: req.params.id});
            res.json(response);
        } catch (error) {
            res.json(stringResponser(error));
        }
    };

    selectOnePayment = async (req, res) => {
        try {
            const response = await paymentRepository.selectOnePayment({pk_pagamento: req.params.id});
            res.json(response);
        } catch (error) {
            res.json(stringResponser(error));
        }
    };

}

module.exports = new PaymentService();
