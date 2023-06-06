const { Router } = require('express');
const { LabelController } = require('../controllers');

const labelRouter = Router();

labelRouter.get('', (req, res) => new LabelController(req, res).getAll());
labelRouter.get('/:id', (req, res) => new LabelController(req, res).getById());
labelRouter.post('', (req, res) => new LabelController(req, res).create());

module.exports = labelRouter;
