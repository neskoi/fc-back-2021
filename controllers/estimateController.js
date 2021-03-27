const estimateService = require('../services/estimateService');

class EstimateController {
    async create(req, res){
       estimateService.create(req, res);
    }
} 

module.exports = new EstimateController();