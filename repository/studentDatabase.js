const db = require("../repository/db");
const TABLE_STUDENT = 'filho';

class studentDatabase {
  constructor(connection) {
    this.db = connection;
  }
  async postStudent(person_id, school, name, cpf, img_avatar_url, year) {

    await db.raw(`
      INSERT INTO ${TABLE_STUDENT} (fk_pessoa, fk_escola, nome, CPF, img_avatar_url, ano_escolar)
      VALUES ("${person_id}", "${school}", "${name}", "${cpf}", "${img_avatar_url}", "${year}")
    `);

  }

  async updateStudent(student_id, school, img_avatar_url, year) {

    await db.raw(`
      UPDATE ${TABLE_STUDENT}
        SET fk_escola = "${school}" , img_avatar_url = "${img_avatar_url}", ano_escolar = "${year}"
        WHERE pk_filho = "${student_id}"
    `);

  }
}

module.exports = new studentDatabase(db);