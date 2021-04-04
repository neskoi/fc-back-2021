const estimateRepository = require('../repository/estimateRepository');
const dateManager = require('../utils/dateManager');
const stringResponser = require('../utils/stringResponser');

class EstimateService {
    create = async (req, res) => {
        await estimateRepository.create({...req.body, img_orcamento_url: req.file.path});
        res.json(stringResponser("Success"));
    };

    showOne = async (req, res) => {
        const response = await estimateRepository.showOne(req.params.id);
        res.json(response);
    };

    showAllUnpaid = async (req, res) => {
        const response = await estimateRepository.showAllUnpaid();
        res.json(response);
    };

    purchaseProofInsertion = async (req, res) => {
        await estimateRepository.purchaseProofInsertion(req.params.id, {img_nota_url: req.file.path});
        res.json(stringResponser("Success"));
    };

}

module.exports = new EstimateService();