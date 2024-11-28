const express = require('express');
const controller = require('../controllers/publicIpController');

const router = express.Router();

router.get('/', controller.get);

module.exports = router;
