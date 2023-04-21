const express = require('express');
const router = express.Router();
const homeController = require('../../controllers/home.controller');

router.get('/', homeController.index);
router.get('/dang-ky-tam-tru', homeController.register);
router.post('/mau-don', homeController.template);


module.exports = router;