const { Router } = require('express');
const { AdminController } = require('../controllers');

const adminRouter = Router();

adminRouter.get('', (req, res) => new AdminController(req, res).getAll());
adminRouter.get('/:id', (req, res) => new AdminController(req, res).getById());

module.exports = adminRouter;
