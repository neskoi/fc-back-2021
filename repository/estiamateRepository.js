const db = require('../repository/db');

class estimateRepository{
    async select(what){
        await db('orcamentos').where('');
    }

    async create(data){
       await db('orcamento').insert(data);
       console.log(data);
    }
}

module.exports = new estimateRepository();