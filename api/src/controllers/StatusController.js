const BaseController = require('./BaseController');
const { SatusModel } = require('../models');

class SatusController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new SatusModel();
  }
}

module.exports = SatusController;
