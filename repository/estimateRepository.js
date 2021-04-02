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
        return await db.select('*').from(TABLE).join('filho', {'filho.pk_filho': `${TABLE}.fk_filho`}).join('escola', {'escola.pk_escola': `filho.fk_escola`});
    }

    updateEstimate = async (id, data) => {
        return await db(TABLE).where('pk_orcamento', id).update(data);
    }
}

module.exports = new EstimateRepository();