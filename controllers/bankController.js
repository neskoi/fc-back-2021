const knexfile = require ('../repository/db.js')
const select = knexfile('banco')

async function buscarBanco() {
    try {
      const bancos = await select
      console.log(bancos)
      return bancos
    }catch (e) {
      console.log(e.message)
      return []
    }
  }
  buscarBanco()

  const data = [
    {
      nome: 'Itau',
    },
    {
      nome: 'Caixa'
    }
  ]

  async function cadastrarBanco() {
    try{
      const insert = await knexfile('banco').insert(data)
      console.log('insert', insert)
    } catch (e) {
      console.log('insert erro', e.message)
    }
  }
//cadastrarBanco()