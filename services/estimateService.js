const estimateRepository = require('../repository/estimateRepository');
const dateManager = require('../utils/dateManager');

class EstimateService {
    async create (req, res){
       await estimateRepository.create({...req.body, img_orcamento_url: req.file.path,data_orcamento: dateManager.dateForDB()});
        console.log(dateManager.dateForDB());
    }
}

module.exports = new EstimateService();