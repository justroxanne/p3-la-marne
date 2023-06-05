const BaseController = require('./BaseController');
const { RoleModel } = require('../models');

class RoleController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new RoleModel();
  }
}

module.exports = RoleController;
