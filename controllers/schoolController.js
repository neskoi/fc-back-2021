const schoolDatabase = require('../repository/schoolDatabase');

class schoolController {
    async getAllSchools(req, res) {
        try {
            const result = await schoolDatabase.getAllSchools()
            return res.status(200).send({result})
        }
        catch(err) {
            console.log('error:', err)
            return res.status(400).json({ message: "Error"})
        }
    }

    async getSchoolById(req, res) {
        try {
            const school_id = Number(req.params.id)

            const result = await schoolDatabase.getSchoolById(school_id)
            return res.status(200).send({result})
        }
        catch(err) {
            console.log('error:', err)
            return res.status(400).json({ message: "Error"})
        }
    }

    async getSchoolByState(req, res) {
        try {
            const state_id = Number(req.params.id)

            const result = await schoolDatabase.getSchoolByState(state_id)
            return res.status(200).send({result})
        }
        catch(err) {
            console.log('error:', err)
            return res.status(400).json({ message: "Error"})
        }
    }
}

module.exports = new schoolController();