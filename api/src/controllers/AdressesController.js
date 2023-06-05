const BaseController = require('./BaseController');
const { AdressesModel } = require('../models');

class AdressesController extends BaseController {

  constructor(req, res) {
    super(req, res);
    this.model = new AdressesModel();
  }

  

  createAddress(addressData) {
    return this.db.query('INSERT INTO addresses SET ?', addressData);
  }

  updateAddress(id, addressData) {
    return this.db.query('UPDATE addresses SET ? WHERE id = ?', [addressData, id]);
  }

  deleteAddress(id) {
    return this.db.query('DELETE FROM addresses WHERE id = ?', id);
  }

}

module.exports = AdressesController;
