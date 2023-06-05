const BaseController = require('./BaseController');
const { LabelModel } = require('../models');

class LabelController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new LabelModel();
  }

  createLabel(){
    this.db
      .query("INSERT INTO labels () VALUES()")
      .create(this.req.params)
      .then(([results]) => this.sendJson(results));
  }
}

module.exports = LabelController;
