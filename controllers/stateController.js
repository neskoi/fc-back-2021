const knexfile = require ('../repository/db.js')
const select = knexfile('estado')


class stateController{
  async buscarEstados() {
    try {
      const estados = await select
      console.log(estados)
      return estados
    }catch (e) {
      console.log(e.message)
      return []
    }
  }
}
module.exports = new stateController()
