const express = require('express');
const router = express.Router();
const homeRouter = require('./home');
const kitchenRouter = require('./kitchen');
const managerRouter = require('./manager');

router.use('/', homeRouter);
// router.use('/kitchen', kitchenRouter);
// router.use('/manager', managerRouter);

module.exports = router;