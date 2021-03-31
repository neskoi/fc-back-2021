const db = require('./db');
const TABLE = 'orcamento';

class EstimateRepository{
    create = async (data) => {
       try {
           return await this.insert(data);
       } catch (error) {
           return error;
       }
    }

    showOne = async (id) => {
        try {
            return await this.selectOne(id);
        } catch (error) {
            return error;
        }
    }

    showAllUnpaid = async () => {
        try {
            return await this.selectAllUnpaid();
        } catch (error) {
            return error;
        }
    }

    purchaseProofInsertion = async (id, data) => {
        
        try {
            return await this.updateEstimate(id, data);
        } catch (error) {
            return error;
        }
    }

    insert = async (data) => {
        await db(TABLE).insert(data);
    }

    selectOne = async (id) => {
        return await db(TABLE).where('pk_orcamento', id);
    }

    selectAllUnpaid = async () => {
        return await db(TABLE).where('data_nota', null).select('pk_orcamento','fk_filho','valor_total','img_orcamento_url','data_orcamento', 'mensagem');
         
    }

    updateEstimate = async (id, data) => {
        return await db(TABLE).where('pk_orcamento', id).update(data);
    }
}

module.exports = new EstimateRepository();