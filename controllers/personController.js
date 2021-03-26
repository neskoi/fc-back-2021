const knexfile = require ('../repository/db.js')
const select = knexfile('pessoa')

// function buscarPessoa() {
//   select.then(function mostrarPessoa(data) {
//     console.log('Pessoas', data)
//   })
// }

async function buscarPessoa() {
  try {
    const data = await select
    console.log(data)
    return data
  }catch (e) {
    console.log(e.message)
    return []
  }
}

// buscarPessoa()

const dataPessoa = [
  {
    fk_estado: 1,
    fk_banco: 2,
    nome: 'Karla Thamiris',
    password: '123456',
    CPF: '12345678910',
    RG: '123456',
    agencia: '1234-0',
    conta: '123456',
    email: 'abc@gmail.com',
  }
]

async function cadastrarPessoa() {
  try{
    const insert = await knexfile('pessoa').insert(dataPessoa)
    console.log('insert', insert)
  } catch (e) {
    console.log('insert erro', e.message)
  }
}
// cadastrarPessoa()
async function atualizarPessoa() {
  const update = await knexfile('pessoa').where('pk_pessoa', '=', 2).update({
    nome: 'Luiz',
    password: '123456'
  });
}
// atualizarPessoa()
async function deletarPessoa() {
  const deletePessoa = await knexfile('pessoa').delete().where('pk_pessoa', '=', 2);
}
// deletarPessoa()