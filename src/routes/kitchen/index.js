const express = require('express');
const router = express.Router();
const kitchenController = require('../../controllers/kitchen.controller');

// Define your file routes here
// E.g:
router.get('/', kitchenController.index);

router.get('/handle-order', kitchenController.toHandleOrderPage);
router.get('/api/handle-order', kitchenController.toHandleOrderPageApi);

router.post('/handle-order', kitchenController.completeOrder);
router.post('/api/handle-order', kitchenController.completeOrderAPI);


router.get('/handle-order/:id', kitchenController.toHandleDetailOrderPage);
router.get('/api/handle-order/:id', kitchenController.toHandleDetailOrderPageAPI);

router.get('/handle-food', kitchenController.toHandleFoodPage);
router.get('/api/handle-food', kitchenController.toHandleFoodPageAPI);


router.post('/handle-food', kitchenController.changeFoodStatus);
router.post('/api/handle-food', kitchenController.changeFoodStatusAPI);

module.exports = router;