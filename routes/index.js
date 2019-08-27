const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeController.js'); 
const AboutController = require('../controllers/aboutController.js'); 
const LoginController = require('../controllers/loginController.js'); 
const RegistryController = require('../controllers/registryController.js'); 

/* GET home page. */
router.get( '/', HomeController.index ); 
router.get( '/about', AboutController.index ); 
router.get( '/login', LoginController.index ); 
router.get( '/register', RegistryController.index );

module.exports = router;
