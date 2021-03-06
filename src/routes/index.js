const routes = require('express').Router();
const members = require('./members');
const roles = require('./roles');
const modules = require('./modules');
const groups = require('./groups');
const districts = require('./districts');
const pjson = require('../../package.json');

routes.get('/', async (req, res) => {
  res.status(200).json({ version: pjson.version });
});

routes.use('/members', members);
routes.use('/roles', roles);
routes.use('/modules', modules);
routes.use('/groups', groups);
routes.use('/districts', districts);

module.exports = routes;
