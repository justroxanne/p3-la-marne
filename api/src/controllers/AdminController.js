const BaseController = require('./BaseController');
const { AdminModel } = require('../models');

class AdminController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new AdminModel();
  }
}

module.exports = AdminController;
