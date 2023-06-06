const { Router } = require('express');
const { RoleController } = require('../controllers');

const roleRouter = Router();

roleRouter.get('', (req, res) => new RoleController(req, res).getAll());
roleRouter.get('/:id', (req, res) => new RoleController(req, res).getById());
roleRouter.post('', (req, res) => new RoleController(req, res).create());
roleRouter.put('/:id', (req, res) => new RoleController(req, res).update());
roleRouter.delete('/:id', (req, res) => new RoleController(req, res).delete());

module.exports = roleRouter;
