const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./api/home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports;