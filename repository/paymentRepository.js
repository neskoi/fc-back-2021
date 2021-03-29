const db = require('../repository/db');

class PaymentRepository{

    registerPayment = async (data) => {
        console.log(data);
        return await db('pagamento').insert(data);
    };

    selectAllPaymentFromPerson = async (data) => {
        return await db('pagamento').where(data);
    };

    selectOnePayment = async (data) => {
        return await db('pagamento').where(data);
    };

}

module.exports = new PaymentRepository();