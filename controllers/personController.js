const knexfile = require ('../repository/db.js')
const select = knexfile('pessoa')
const validaCPF = require('../utils/validaCPF')

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
      console.log('CPF válido?', validaCPF(dataPessoa.cpf))
      if(validaCPF(dataPessoa.cpf)){
        const insert = await knexfile('pessoa').insert({
          fk_estado: dataPessoa.fk_estado,
          fk_banco: dataPessoa.fk_banco,
          nome: dataPessoa.nome,
          cpf: dataPessoa.cpf,
          rg: dataPessoa.rg,
          agencia: dataPessoa.agencia,
          conta: dataPessoa.conta,
        })
        console.log('Pessoa cadastrada com sucesso', insert)
        return true
      } else {
        console.log('CPF Inválido!')
        return false;
      }
    } catch (e) {
      console.log('ERRO', e.message)
      return false
    }
  }
}
module.exports = new personController()
