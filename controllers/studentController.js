const studentDatabase = require('../repository/studentDatabase');
const validaCPF = require('../utils/validaCPF')

class studentController {
    async create(req, res) {
        try {
            const user = req.params.id

            const { school, name, cpf, year, description } = req.body

            const img_avatar_url = req.file.path

            if (!school || !name || !cpf) {
                console.log("Missing input")
                throw new Error
            }
            
            if (validaCPF(cpf.toString())===false) {
                console.log("Invalid CPF")
                throw new Error
            }

            await studentDatabase.postStudent(user, school, name, cpf, img_avatar_url, year, description)
            return res.status(200).send({message: "Student Created"})
        }
        catch(err) {
            console.log('error:', err)
            return res.status(400).json({ message: "Error"})
        }
    }

    async update(req, res) {
        try {
            const student_id = Number(req.params.id)

            const { school, year, description } = req.body

            const img_avatar_url = req.file.path

            await studentDatabase.updateStudent(student_id, school, img_avatar_url, year, description)
            return res.status(200).send({message: "Student Modified"})
        }
        catch(err) {
            console.log('error:', err)
            return res.status(400).json({ message: "Error"})
        }
    }
    
    async getAllByPerson(req, res) {
        try {
            const email = req.params.id
            const result = await studentDatabase.getAllByPerson(email)
            return res.status(200).send({result})
        }
        catch(err) {
            console.log('error:', err)
            return res.status(400).json({ message: "Error"})
        }
      }
    
      async getById(req, res) {
        try {
            const id = req.params.id
            const result = await studentDatabase.getById(id)
            return res.status(200).send({result})
        }
        catch(err) {
            console.log('error:', err)
            return res.status(400).json({ message: "Error"})
        }
      }
}

module.exports = new studentController();