const estimateRepository = require('../repository/estiamateRepository');

class estimateService {
    async create (req, res){
        estimateRepository.create({...req.body, img_orcamento_url: req.file.path});
    }
}

module.exports = new estimateService();