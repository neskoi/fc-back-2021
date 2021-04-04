const jwt = require('jsonwebtoken')
const { promisify } = require('util')
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

  async cadastrarPessoa(req, res) {
    try{
      const dataPessoa = req.body
      const { authorization } = req.headers
      console.log('authorization', authorization);
      const [, token] = authorization.split(' ')
      console.log('token', token);
      const decoded = await promisify(jwt.verify)(token, process.env.APP_JWT_SECRET)
      console.log('decoded', decoded);
      const pk_usuario = decoded.pk_usuario
      console.log('pk_usuario', pk_usuario);
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
        console.log('insert', insert);
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
