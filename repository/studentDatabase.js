const db = require("../repository/db");
const TABLE_STUDENT = 'filho';
const TABLE_SCHOOL = 'escola';
const TABLE_STATE = 'estado';
const TABLE_USER = 'usuario';
const TABLE_PERSON = 'pessoa';

class studentDatabase {
  constructor(connection) {
    this.db = connection;
  }
  async postStudent(user, school, name, cpf, img_avatar_url, year, description) {
    const person = await db.raw(`
        SELECT pessoa.pk_pessoa FROM pessoa 
        INNER JOIN usuario ON usuario.pk_usuario = pessoa.fk_usuario 
        WHERE usuario.email = '${user}'
     `) ;
     const person_id = person[0][0].pk_pessoa;
     await db(TABLE_STUDENT).insert({fk_pessoa:person_id, fk_escola: school, nome: name, cpf: cpf, img_avatar_url: img_avatar_url, ano_escolar: year, historia: description});
  }

  async updateStudent(student_id, school, img_avatar_url, year, description) {
    await db(TABLE_STUDENT).where({pk_filho: student_id}).update({fk_escola: school, img_avatar_url: img_avatar_url, ano_escolar: year, historia: description})
  }

  async getAllByPerson(email) {

    const result = await db.raw(`
        SELECT pk_filho, fk_pessoa, ${TABLE_STUDENT}.nome as nome, filho.cpf as cpf, img_avatar_url, ${TABLE_SCHOOL}.nome_escola as escola, ano_escolar, historia FROM ${TABLE_STUDENT} filho
        LEFT JOIN ${TABLE_SCHOOL} escola ON escola.pk_escola = filho.fk_escola
        LEFT JOIN ${TABLE_PERSON} pessoa ON pessoa.pk_pessoa = filho.fk_pessoa
        LEFT JOIN ${TABLE_USER} usuario ON usuario.pk_usuario = pessoa.fk_usuario
        WHERE usuario.email="${email}";
    `);

    return result[0]
  }

  async getById(id) {

    const result = await db.raw(`
        SELECT pk_filho, fk_pessoa, ${TABLE_STUDENT}.nome as nome, cpf, img_avatar_url, ${TABLE_SCHOOL}.nome_escola as escola, ano_escolar, ${TABLE_STATE}.nome as estado, historia FROM db_back.filho filho
        LEFT JOIN ${TABLE_SCHOOL} escola ON escola.pk_escola = filho.fk_escola
        LEFT JOIN ${TABLE_STATE} estado ON estado.pk_estado = escola.fk_estado
        WHERE pk_filho=${id};
    `);

    return result[0][0]
  }


}

module.exports = new studentDatabase(db);