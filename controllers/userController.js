require('dotenv/config')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knexfile = require ('../repository/db.js')
const select = knexfile('usuario')

class userController {
  async buscarUser() {
    try {
      const data = await select
      console.log(data)
      return data
    }catch (e) {
      console.log(e.message)
      return []
    }
  }

  async cadastrarUser(req, res) {
    try{
      const dataUser = req.body
      const hash = dataUser.password ? bcrypt.hashSync(dataUser.password, 10) : null;
      const insert = await knexfile('usuario').insert({
        email: dataUser.email || null,
        password: hash,
        data_cadastro: new Date(),
      })
      return res.status(200).json({
        message: "Usuário cadastrado com sucesso!"
      })
    } catch (e) {
      return res.status(400).json({
        message: "Não foi possível cadastrar o usuário: " + e.message
      })
    }
  }

  async login(req, res) {
    const dataUser = req.body
    try{ 
      const user = await knexfile('usuario').where('email', dataUser.email).first()
      if (user) {
        const match = await bcrypt.compare(dataUser.password, user.password);
        if (match === true) {
          const token = jwt.sign({ pk_usuario: user.pk_usuario }, process.env.APP_JWT_SECRET)
          const updateUser = await knexfile('usuario')
            .where('pk_usuario', user.pk_usuario)
            .update({
              token: token,
            })
          return res.status(200).json({data: {
            email: user.email,
            token: token,
          }})
        }
        return res.status(400).json({ message: "Senha Incorreta!" })
      }
      return res.status(400).json({ message: "Usuário não encontrado" })
    }
    catch (e) {
      console.log(e.message)
      return res.status(503).json({ message: "Não foi possível realizar o Login, tente novamente mais tarde!" })
    }
  }

}


module.exports = new userController()
  

  
  




