const { db } = require('../config');

class BaseModel {
  //déclaration des éléments du constructor
  table;
  db;

  constructor(table) {
    this.table = table;
    this.db = db;
  }

  getAll() {
    return this.db.query(`SELECT * FROM ${this.table}`);
  }

  getById(id) {
    return this.db.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
  }

  create(incoming) {
    const keys = Object.keys(incoming);
    const values = Object.values(incoming);
    const fill = values.map((value) => '?');

    return this.db.query(
      `INSERT INTO ${this.table} (${keys}) VALUES (${fill})`,
      values
    );
  }

  delete(id) {
    return this.db.query(`DELETE FROM ${this.table} WHERE id=?`, [id]);
  }
}

module.exports = BaseModel;
