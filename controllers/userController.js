const knexfile = require ('../repository/db.js')
const select = knexfile('usuario')
const bcrypt = require('bcrypt');

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

  async cadastrarUser(dataUser) {
    try{
      const hash = bcrypt.hashSync(dataUser.password, 10);
      console.log(hash)
      const insert = await knexfile('usuario').insert({
        email: dataUser.email,
        password: hash,
      })
      console.log('Usuário Cadastrado com sucesso!', insert)
    } catch (e) {
      console.log('insert erro', e.message)
    }
  }
}

module.exports = new userController()
  

  
  




