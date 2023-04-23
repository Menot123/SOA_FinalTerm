const express = require('express');
const router = express.Router();
const bossController = require('../../controllers/host.controller');
const { loggedin } = require('../../middlewares/auth/auth.middware')

router.get('/', loggedin, bossController.index);
router.get('/manage-customer', loggedin, bossController.manageCustomer);
router.get('/api/rooms', bossController.getRoomsAPI);
router.get('/api/manage-customer', bossController.manageCustomerAPI);
router.post('/api/manage-customer', bossController.createCustomerAPI);
router.delete('/api/manage-customer', bossController.deleteCustomerAPI);
router.put('/api/manage-customer', bossController.updateCustomerAPI);


router.get('/api/dang-ky-tam-tru', bossController.managerTRRFAPI);
router.get('/dang-ky-tam-tru', loggedin, bossController.managerTRRF);
router.get('/detail-TRRF/', loggedin, bossController.getDetailById)
router.post('/api/send', bossController.cofirmed)
router.put('/api/hiden', bossController.hide)

router.get('/api/thong-tin/:id', bossController.getInfo)
router.get('/gia-han-tam-tru', loggedin, bossController.managerGHTT);
router.get('/api/gia-han-tam-tru', bossController.managerGHTTAPI);

router.get('/api/quan-ly-phan-hoi', bossController.manResponseAPI)
router.get('/quan-ly-phan-hoi', loggedin, bossController.manResponse)

router.post('/send-response/:email', bossController.sendLinkResponse)
router.post('/flag', bossController.hidenResponse)
router.post('/logout', bossController.handleLogout);



router.get('/api/quan-ly-phan-hoi', bossController.manResponseAPI)
router.get('/quan-ly-phan-hoi', bossController.manResponse)

router.post('/send-response/:email', bossController.sendLinkResponse)
router.post('/flag', bossController.hidenResponse)


router.get('/manage-bills', bossController.manageBills);
router.get('/manage-bills/:year', bossController.manageBills);
router.get('/manage-bills/:year/:month', bossController.manageBills);
router.get('/api/manage-bills', bossController.manageBillsAPI);
router.get('/api/manage-bills/:year', bossController.manageBillsAPI);
router.get('/api/manage-bills/:year/:month', bossController.manageBillsAPI);

router.post('/api/extract-bill', bossController.extractBillAPI);
router.post('/extract-bill', bossController.extractBill);
router.get('/api/bill-detail/:mahd', bossController.getBillDetailAPI);

router.get('/hop-dong-thue-tro',bossController.getHopDongThueTro)

router.get('/api/get-hopdong-by-maphong/:maphong', bossController.getHopDongByMaphongAPI);
router.put('/hidenHD', bossController.hidenHD)
router.get('/detail-HDTT/:id',loggedin, bossController.getDetailHDTTById)
router.get('/hop-dong-thue-tro-form',loggedin, bossController.indexHDTT)
router.post('/HDTT',loggedin, bossController.createHDTT)






module.exports = router;