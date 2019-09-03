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
 * File: ./routes/api.js
 *======================================================================================
 */

const express = require( 'express' ); 		// Import express package.
const router = express.Router();			// Get the router interface object.

router.get( '/', (req, res) => 
{
	// ...
	res.json(
		{
			status: 'OK', 
		}
	);
});

// Exports router object to use.
module.exports = router;
