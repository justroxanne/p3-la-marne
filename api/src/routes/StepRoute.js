const { Router } = require('express');
const { StepController } = require('../controllers');

const stepRouter = Router();

stepRouter.get('', (req, res) => new StepController(req, res).getAll());
stepRouter.get('/:id', (req, res) => new StepController(req, res).getById());
stepRouter.post('', (req, res) => new StepController(req, res).create());
stepRouter.put('/:id', (req, res) => new StepController(req, res).update());
stepRouter.delete('/:id', (req, res) => new StepController(req, res).delete());

module.exports = stepRouter;
