const knexfile = require ('../repository/db.js')
const select = knexfile('estado')

async function buscarEstados() {
  try {
    const estados = await select
    console.log(estados)
    return estados
  }catch (e) {
    console.log(e.message)
    return []
  }
}

// buscarEstados()

const data = [
  {
    nome: 'Ceará',
  },
  {
    nome: 'São Paulo'
  }
]

async function cadastrarEstado() {
  try{
    const insert = await knexfile('estado').insert(data);
    console.log('insert', insert)
  } catch (e) {
    console.log('insert erro', e.message)
  }
}
// cadastrarEstado()

















