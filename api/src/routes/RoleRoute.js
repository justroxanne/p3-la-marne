const { Router } = require('express');
const { RoleController } = require('../controllers');

const roleRouter = Router();

roleRouter.get('', (req, res) => new RoleController(req, res).getAll());
roleRouter.get('/:id', (req, res) => new RoleController(req, res).getById());

module.exports = roleRouter;
