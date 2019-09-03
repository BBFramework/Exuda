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
 * File: ./middlewares/moment.js
 *============================================================================
 */
const moment = require('moment'); 			// Import the moment package.
 
/**
 * MomentJs utility middleware.
 */
module.exports = ( req, res, next ) => 
{
	/**
	 * Defines moment utility function, that is format a date.
	 */
	res.locals.moment = moment;
	
	// Load vietnamese language package.
	require('moment/locale/vi'); 
	// Load all locales.
	// require("moment/min/locales.min");
	// moment.locale('cs');
	
	/**
	 * Config moment middleware. 
	 */
	res.locals.moment.locale('vn'); 
	
	next();
};