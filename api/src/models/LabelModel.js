const BaseModel = require('./BaseModel');

class LabelModel extends BaseModel {
  constructor() {
    super('labels');
  }

  createLabel() {
    return this.db.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = LabelModel;