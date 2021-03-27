const studentDatabase = require('../repository/studentDatabase');

class studentController {
    async create(req, res) {
        try {
            const person_id = Number(req.params.id)

            const { school, name, cpf } = req.body

            if (!school || !name || !cpf) {
                throw new Error
            }

            await studentDatabase.postStudent(person_id, school, name, cpf)
            return res.status(200).send({message: "Student Created"})
        }
        catch(err) {
            console.log('error:', err)
            return res.status(400).json({ message: "Error"})
        }
    }
}

module.exports = new studentController();