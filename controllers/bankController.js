const knexfile = require ('../repository/db.js')
const select = knexfile('banco')


class bankController{
  async buscarBanco() {
    try {
      const bancos = await select
      return bancos
    }catch (e) {
      console.log(e.message)
      return []
    }
  }
}
module.exports = new bankController()
