const express = require('express');
const router = express.Router();
const bossController = require('../../controllers/host.controller');

router.get('/', bossController.index);
router.get('/manage-customer', bossController.manageCustomer);
router.get('/api/manage-customer', bossController.manageCustomerAPI);
router.get('/api/rooms', bossController.getRoomsAPI);


router.get('/api/dang-ky-tam-tru', bossController.managerTRRFAPI);
router.get('/dang-ky-tam-tru', bossController.managerTRRF);
router.get('/detail-TRRF/',bossController.getDetailById)
router.post('/api/send',bossController.cofirmed)
router.put('/api/hiden',bossController.hide)

router.get('/api/thong-tin/:id',bossController.getInfo)
router.get('/gia-han-tam-tru', bossController.managerGHTT);
router.get('/api/gia-han-tam-tru', bossController.managerGHTTAPI);



// router.get('/api/room',bossController.getRoom)

module.exports = router;