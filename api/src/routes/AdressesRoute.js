const { Router } = require('express');
const AddressesController = require('../controllers/AdressesController');

const addressesRouter = Router();

addressesRouter.get('', (req, res) =>
  new AddressesController(req, res).getAll()
);
addressesRouter.get('/:id', (req, res) =>
  new AddressesController(req, res).getById()
);
addressesRouter.post('', (req, res) =>
  new AddressesController(req, res).create()
);
addressesRouter.put('/:id', (req, res) =>
  new AddressesController(req, res).update()
);
addressesRouter.delete('/:id', (req, res) =>
  new AddressesController(req, res).delete()
);

module.exports = addressesRouter;
