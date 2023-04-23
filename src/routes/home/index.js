const express = require('express');
const router = express.Router();
const homeController = require('../../controllers/home.controller');

router.get('/dang-ky-tam-tru', homeController.register);
router.post('/mau-don', homeController.template);
router.post('/api/send', homeController.send);

router.get('/gia-han-tam-tru', homeController.renewal);
router.get('/api/thong-tin-don-dk/:id', homeController.getInfoTRRF);

router.get('/phan-hoi',homeController.indexResponse);
router.post('/api/send-response',homeController.sendResponseAPI);
router.post('/send-response',homeController.sendResponse);

router.get('/login', homeController.indexLogin);
router.post('/api/login', homeController.handleLoginAPI);
router.post('/login', homeController.handleLogin);

router.get('/check-bill', homeController.checkBill);
router.get('/reset-password/:email', homeController.resetPassword);
router.post('/change-password', homeController.changePass);


router.get('/', homeController.index);


module.exports = router;