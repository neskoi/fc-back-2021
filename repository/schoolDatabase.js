const db = require("./db");
const TABLE_SCHOOL = 'escola'

class schoolDatabase {
  constructor(connection) {
    this.db = connection;
  }

  async getAllSchools() {

    const result = await db.raw(`
      SELECT * FROM ${TABLE_SCHOOL}
      LIMIT 50
    `);

    return result[0]
  }

  async getSchoolById(school_id) {

    const result = await db.raw(`
      SELECT * FROM ${TABLE_SCHOOL}
      WHERE pk_escola=${school_id}
      LIMIT 50
    `);

    return result[0]
  }

  async getSchoolByState(state_id) {

    const result = await db.raw(`
      SELECT * FROM ${TABLE_SCHOOL}
      WHERE fk_estado=${state_id}
      LIMIT 50
    `);

    return result[0]
  }
}

module.exports = new schoolDatabase(db);