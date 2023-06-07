const { Router } = require('express');
const { StatusController } = require('../controllers');

const statusRouter = Router();

statusRouter.get('', (req, res) => new StatusController(req, res).getAll());
statusRouter.get('/:id', (req, res) =>
  new StatusController(req, res).getById()
);
statusRouter.post('', (req, res) => new StatusController(req, res).create());
statusRouter.put('/:id', (req, res) => new StatusController(req, res).update());
statusRouter.delete('/:id', (req, res) =>
  new StatusController(req, res).delete()
);

module.exports = statusRouter;
