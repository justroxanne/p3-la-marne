const { Router } = require('express');
const { StepController } = require('../controllers');

const stepRouter = Router();

stepRouter.get('', (req, res) => new StepController(req, res).getAll());
stepRouter.get('/:id', (req, res) => new StepController(req, res).getById());

module.exports = stepRouter;
