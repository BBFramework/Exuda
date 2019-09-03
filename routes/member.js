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
 * File: ./routes/member.js
 *======================================================================================
 */

var express = require('express');			// Import express package. 
var router = express.Router();				// Get the router interface object.

/**
 * Middleware for basic authentication.
 */
router.use( require('../middlewares/member') ); 

/** get member page. */
router.get('/', (req, res, next) => 
{
	res.send('Welcome to exuda');
});

module.exports = router;
