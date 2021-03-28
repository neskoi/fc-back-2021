const estimateService = require('../services/estimateService');

class EstimateController {
    create = async (req, res) => {
       estimateService.create(req, res);
    };

    showOne = async (req, res) => {
        estimateService.showOne(req, res);
    };

    showAllUnpaid = async (req, res) => {
        estimateService.showAllUnpaid(req, res);
    };

    purchaseProofInsertion = async (req, res) => {
        estimateService.purchaseProofInsertion(req, res);
    };
} 

module.exports = new EstimateController();