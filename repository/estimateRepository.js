const db = require('./db');

class EstimateRepository{
    async select(what){
        await db('orcamentos').where('');
    }

    async create(data){
       await db('orcamento').insert(data);
    }
}

module.exports = new EstimateRepository();