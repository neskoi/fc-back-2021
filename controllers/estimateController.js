const estimateService = require('../services/estimateService');

class estimateController {
    async create(req, res){
       estimateService.create(req, res);
    }
} 

module.exports = new estimateController();