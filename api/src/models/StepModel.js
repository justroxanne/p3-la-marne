const BaseModel = require('./BaseModel');
class StepModel extends BaseModel {
  constructor() {
    super('steps');
  }

  getStepByStatus() {
    return this.db.query(
      `SELECT * FROM steps JOIN status ON steps.status_id=status.id`
    );
  }

  getStepByLabel() {
    return this.db.query(
      `SELECT * FROM steps JOIN labels ON steps.labels_id=labels.id`
    );
  }
}

module.exports = StepModel;
