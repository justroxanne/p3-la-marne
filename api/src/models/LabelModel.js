const BaseModel = require('./BaseModel');

class LabelModel extends BaseModel {
  constructor() {
    super('labels');
  }

  //a verifier si toujours d'utilité
  createLabel() {
    return this.db //donnée dynamique de la db
    .query(`INSERT INTO ${this.table} (name, category) VALUES (?, ?)`, [this.name, this.category]);
  }
}

module.exports = LabelModel;