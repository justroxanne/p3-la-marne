const userRouter = require('./UserRoute');
const adminRouter = require('./AdminRoute');
const categoryRouter = require('./CategoryRoute');
const roleRouter = require('./RoleRoute');
const statusRouter = require('./StatusRoute');
const stepRouter = require('./StepRoute');
const addressesRouter = require('./AdressesRoute');
const labelRouter = require('./LabelRoute');

module.exports = { userRouter, adminRouter, categoryRouter, roleRouter, statusRouter, stepRouter, addressesRouter, labelRouter };
