const express = require('express');
const router = express.Router();
const bossController = require('../../controllers/host.controller');

router.get('/', bossController.index);
router.get('/manage-customer', bossController.manageCustomer);
router.get('/api/manage-customer', bossController.manageCustomerAPI);
router.get('/api/rooms', bossController.getRoomsAPI);



module.exports = router;