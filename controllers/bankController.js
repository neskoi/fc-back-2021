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