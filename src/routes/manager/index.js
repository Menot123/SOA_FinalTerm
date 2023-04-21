const express = require('express');
const router = express.Router();
const managerController = require('../../controllers/manager.controller');

// Define your file routes here
// E.g:
router.get('/', managerController.index);
router.get('/sum-bill', managerController.toHandleSumBillPage);
router.get('/api/sum-bill', managerController.toHandleSumBillPageAPI);

router.get('/bill-history', managerController.toHandleBillHistoryPage);
router.get('/api/bill-history', managerController.toHandleBillHistoryPageAPI);

router.post('/bill-history', managerController.toSelectYear);
router.post('/api/bill-history', managerController.toSelectYearAPI);

router.get('/detail-order/:id', managerController.toHandleDetailOfBillPage);
router.get('/api/detail-order/:id', managerController.toHandleDetailOfBillPageAPI);
router.get('/:id', managerController.index);

module.exports = router;