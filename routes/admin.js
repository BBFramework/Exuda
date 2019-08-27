// File: ./routes/admin.js
const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/admin/indexController.js');

router.get( '/', IndexController.index );

module.exports = router;
