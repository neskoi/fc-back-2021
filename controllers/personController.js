const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const knexfile = require ('../repository/db.js')
const select = knexfile('pessoa')
const validaCPF = require('../utils/validaCPF')

class personController{

  async buscarPessoa() {
    try {
      const data = await select
      return data
    }catch (e) {
      console.log(e.message)
      return []
    }
  }



  async buscarPessoaPorIdUsuario(email) {
    try {
      const data = await knexfile.select('pk_pessoa').from('pessoa').innerJoin('usuario', 'usuario.pk_usuario', 'pessoa.fk_usuario').where({email: email});
      return data
    }catch (e) {
      console.log(e.message)
      return []
    }
  }

  async cadastrarPessoa(req, res) {
    try{
      const dataPessoa = req.body
      const { authorization } = req.headers
      const [, token] = authorization.split(' ')
      const decoded = await promisify(jwt.verify)(token, process.env.APP_JWT_SECRET)
      const pk_usuario = decoded.pk_usuario
      if(validaCPF(dataPessoa.cpf)){
        const insert = await knexfile('pessoa').insert({
          fk_estado: dataPessoa.fk_estado,
          fk_banco: dataPessoa.fk_banco,
          fk_usuario: pk_usuario,
          nome: dataPessoa.nome,
          cpf: dataPessoa.cpf,
          rg: dataPessoa.rg,
          agencia: dataPessoa.agencia,
          conta: dataPessoa.conta,
        })
        return res.status(200).json({
          message: "Usuário cadastrado com sucesso!"
        }) 
       
      }
      }  catch (e) {
      return res.status(400).json({
        message: "Não foi possível cadastrar o usuário: " + e.message
        })
      }
    }

    }

 

module.exports = new personController()
