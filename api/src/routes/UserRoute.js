const { Router } = require('express');
const { UserController } = require('../controllers');

const userRouter = Router();

userRouter.get('', (req, res) => new UserController(req, res).getAll());
userRouter.get('/:id', (req, res) => new UserController(req, res).getById());
userRouter.post('', (req, res) => new UserController(req, res).create());
userRouter.put('/:id', (req, res) => new UserController(req, res).update());
userRouter.delete('/:id', (req, res) => new UserController(req, res).delete());

module.exports = userRouter;
