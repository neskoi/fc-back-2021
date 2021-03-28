const db = require("../repository/db");

class studentDatabase {
  constructor(connection) {
    this.db = connection;
  }
  async postStudent(person_id, school, name, cpf) {

    await db.raw(`
      INSERT INTO filho (fk_pessoa, fk_escola, nome, CPF)
      VALUES ("${person_id}", "${school}", "${name}", "${cpf}")
    `);

  }
}

module.exports = new studentDatabase(db);