/**
 *============================================================================
 * Welcome to Exuda Cms, A Nodejs-Expressjs content management system. 
 * It's trying instance new a web enviroment that use create some wonderful 
 * applications.
 *
 * Owner: Bapquad Games. 
 * Author: Cuong.H.Vu 
 * Copyright (c) 2019. Bapquad Games. 
 *
 * File: ./middlewares/numeral.js
 *============================================================================
 */
const numeral = require('numeral'); 			// Import the numeral package. 

/**
 * MumeralJs utility middleware.
 */
module.exports = ( req, res, next ) => 
{
	/**
	 * Assign the utility to local scope.
	 */
	res.locals.numeral = numeral; 
	
	next();
};