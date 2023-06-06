const { Router } = require('express');
const AddressesController = require('../controllers/AdressesController'); 

const addressesRouter = Router();


addressesRouter.get('', (req, res) => new AddressesController(req, res).getAll());
addressesRouter.get('/:id', (req, res) => new AddressesController(req, res).getById(req, res));
addressesRouter.post('', (req, res) => new AddressesController(req, res).createAddress(req, res));
addressesRouter.put('/:id', (req, res) => new AddressesController(req, res).updateAddress(req, res));
addressesRouter.delete('/:id', (req, res) => new AddressesController(req, res).deleteAddress(req, res));

module.exports = addressesRouter;
