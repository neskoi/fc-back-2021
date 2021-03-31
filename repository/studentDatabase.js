const db = require("../repository/db");
const TABLE_STUDENT = 'filho';

class studentDatabase {
  constructor(connection) {
    this.db = connection;
  }
  async postStudent(person_id, school, name, cpf, img_avatar_url, year) {
     await db(TABLE_STUDENT).insert({fk_pessoa:person_id, fk_escola: school, nome: name, cpf: cpf, img_avatar_url: img_avatar_url, ano_escolar: year});
  }

  async updateStudent(student_id, school, img_avatar_url, year) {
    await db(TABLE_STUDENT).where({pk_filho: student_id}).update({fk_escola: school, img_avatar_url: img_avatar_url, ano_escolar: year})
  }
}

module.exports = new studentDatabase(db);