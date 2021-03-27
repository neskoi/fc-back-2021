const estimateRepository = require('../repository/estimateRepository');
const dateManager = require('../utils/dateManager');

class EstimateService {
    create = async (req, res) => {
        const response = await estimateRepository.create({...req.body, img_orcamento_url: req.file.path,data_orcamento: dateManager.dateForDB()});
        res.json(response);
    }

    showOne = async (req, res) => {
        const response = await estimateRepository.showOne(req.params.id);
        res.json(response);
    }

    showAllUnpaid = async (req, res) => {
        const response = await estimateRepository.showAllUnpaid();
        res.json(response);
    }

    purchaseProofInsertion = async (req, res) => {
        const response = await estimateRepository.purchaseProofInsertion(req.params.id, {img_nota_url: req.file.path, data_nota: dateManager.dateForDB()});
        res.json(response);
    }

}

module.exports = new EstimateService();