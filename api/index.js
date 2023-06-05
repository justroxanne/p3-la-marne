const express = require('express');
const { userRouter, adminRouter, stepRouter, categoryRouter, roleRouter, statusRouter } = require('./src/routes');
const app = express();

app.use(express.json());

const APIRouter = express.Router();

APIRouter.get('/version', function (req, res) {
  const { version } = require('./package.json');
  return res.json({ version });
});

APIRouter.use('/users', userRouter);
APIRouter.use('/categories', categoryRouter);
APIRouter.use('/roles', roleRouter);
APIRouter.use('/status', statusRouter);
APIRouter.use('/admins', adminRouter);
APIRouter.use('/steps', stepRouter);

app.use('/api', APIRouter);

app.listen(8080, function () {
  console.log('API is running on 8080');
});
