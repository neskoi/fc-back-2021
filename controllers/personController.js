const knexfile = require ('../repository/db.js')
const select = knexfile('pessoa')

class personController{

  async buscarPessoa() {
    try {
      const data = await select
      console.log(data)
      return data
    }catch (e) {
      console.log(e.message)
      return []
    }
  }

  async cadastrarPessoa(dataPessoa) {
    try{
      const insert = await knexfile('pessoa').insert({

        fk_estado: dataPessoa.fk_estado,
        fk_banco: dataPessoa.fk_banco,
        nome: dataPessoa.nome,
        cpf: dataPessoa.cpf,
        rg: dataPessoa.rg,
        agencia: dataPessoa.agencia,
        conta: dataPessoa.conta,
        
      })
      console.log('Cadastrado com Sucesso!', insert)
    } catch (e) {
      console.log('ERRO', e.message)
    }
  }
}
module.exports = new personController()
