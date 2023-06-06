const BaseController = require('./BaseController');
const { LabelModel } = require('../models');

class LabelController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new LabelModel();
  }

//   createLabel(){
//     this.model.name = this.req.body.name;
//     this.model.category = this.req.body.category;
//     this.model.createLabel()
//       .then(([results]) => this.sendJson(results))
//       .catch(error => this.sendError(error));
// }
}

module.exports = LabelController;
