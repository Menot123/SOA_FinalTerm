const express = require('express');
const router = express.Router();
const homeRouter = require('./home');
const hostRouter = require('./host');

router.use('/', homeRouter);
router.use('/host', hostRouter);

module.exports = router;