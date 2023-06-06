const { Router } = require('express');
const { CategoryController } = require('../controllers');

const categoryRouter = Router();

categoryRouter.get('', (req, res) => new CategoryController(req, res).getAll());
categoryRouter.get('/:id', (req, res) =>
  new CategoryController(req, res).getById()
);
categoryRouter.post('', (req, res) =>
  new CategoryController(req, res).create()
);
categoryRouter.delete('/:id', (req, res) =>
  new CategoryController(req, res).delete()
);

module.exports = categoryRouter;
