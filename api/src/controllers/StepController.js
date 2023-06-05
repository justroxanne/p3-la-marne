const BaseController = require('./BaseController');
const { StepModel } = require('../models');

class StepController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new StepModel();
  }

  getAll() {
    console.log(this.req.query);
    this.model.getAll().then(([results]) => this.sendJson(results));
  }
}

module.exports = StepController;
