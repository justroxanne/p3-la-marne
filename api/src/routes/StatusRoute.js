const { Router } = require('express');
const { StatusController } = require('../controllers');

const statusRouter = Router();

statusRouter.get('', (req, res) => new StatusController(req, res).getAll());
statusRouter.get('/:id', (req, res) => new StatusController(req, res).getById());

module.exports = statusRouter;
