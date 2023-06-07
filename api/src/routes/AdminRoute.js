const { Router } = require('express');
const { AdminController } = require('../controllers');

const adminRouter = Router();

adminRouter.get('', (req, res) => new AdminController(req, res).getAll());
adminRouter.get('/:id', (req, res) => new AdminController(req, res).getById());
adminRouter.post('', (req, res) => new AdminController(req, res).create());
adminRouter.put('/:id', (req, res) => new AdminController(req, res).update());
adminRouter.delete('/:id', (req, res) =>
  new AdminController(req, res).delete()
);

module.exports = adminRouter;
