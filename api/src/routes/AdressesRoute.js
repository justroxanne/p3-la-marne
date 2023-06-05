const { Router } = require('express');
const { AdressesController }= require('../controllers')

const adressesRouter = Router();

adressesRouter.get('', (req, res) => new AdressesController(req, res).getAll());
adressesRouter.get('/:id', (req, res) => new AdressesController(req, res).getById());

module.exports = adressesRouter;
