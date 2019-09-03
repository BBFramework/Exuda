/**
 *======================================================================================
 * Welcome to Exuda Skeletal Application, A Nodejs-Expressjs content management system. 
 * It's trying instance new a web enviroment that use create some wonderful 
 * applications.
 *
 * Owner: Bapquad Games. 
 * Author: Cuong.H.Vu 
 * Copyright (c) 2019. Bapquad Games. 
 *
 * File: ./routes/index.js
 *======================================================================================
 */

/**
 * Require the needle packages.
 */
const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeController.js'); 
const AboutController = require('../controllers/aboutController.js'); 
const LoginController = require('../controllers/loginController.js'); 
const RegistryController = require('../controllers/registryController.js'); 
const LogoutController = require('../controllers/logoutController.js'); 
const PasswordResetController = require('../controllers/passwordResetController.js'); 

/** GET home page. */
router.get( '/', HomeController.index );

/** GET about page. */
router.get( '/about', AboutController.index ); 

/** GET login page. */
router.get( '/login', LoginController.index ); 
router.post( '/login', LoginController.validate('process'), LoginController.process ); 

/** GET registry page. */
router.get( '/register', RegistryController.index ); 
router.post( '/register', RegistryController.validate('process'), RegistryController.process );

/** GET, POST password reset request */
router.get( '/password-reset', PasswordResetController.index ); 
router.post( '/password-reset', PasswordResetController.validate('process'), PasswordResetController.process );

/** POST logout request */
router.post( '/logout', LogoutController.index );

module.exports = router;
