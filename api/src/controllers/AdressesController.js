const BaseController = require('./BaseController');
const { AdressesModel } = require('../models');

class AdressesController extends BaseController {
  constructor(req, res) {
    super(req, res);
    this.model = new AdressesModel();
  }
}

module.exports = AdressesController;
