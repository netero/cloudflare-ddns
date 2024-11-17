const express = require('express');
const userController = require('../controllers/ipController');

const router = express.Router();

// Routes map to controller functions
router.get('/', userController.get);
router.put('/', userController.update);

module.exports = router;
