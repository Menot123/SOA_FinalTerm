const express = require('express');
const router = express.Router();
const homeRouter = require('./home');
const hostRouter = require('./host');
const kitchenRouter = require('./kitchen');
const managerRouter = require('./manager');

router.use('/', homeRouter);
router.use('/host', hostRouter);
// router.use('/kitchen', kitchenRouter);
// router.use('/manager', managerRouter);

module.exports = router;