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
      console.log(dataUser)
      const hash = bcrypt.hashSync(dataUser.password, 10);
      console.log(hash)
      const insert = await knexfile('usuario').insert({
        email: dataUser.email,
        password: hash,
        data_cadastro: new Date(),
      })
      console.log('Usuário Cadastrado com sucesso!', insert)
    } catch (e) {
      console.log('insert erro', e.message)
    }
  }
  async login(dataUser){
    try{
      const user = await knexfile('usuario').where('email', dataUser.email).first()
      if (user) {
        const match = await bcrypt.compare(dataUser.password, user.password);
        console.log(match);
        if (match === true) {
          console.log("usuário logado!")
          return true
        }
        return false
      }
      return false
    }
    catch (e) {
      console.log('Erro Login');
      return false
    }
  }

}


module.exports = new userController()
  

  
  




