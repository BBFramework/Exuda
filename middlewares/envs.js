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
 * File: ./middlewares/envs.js
 *============================================================================
 */
 
/**
 * Enviroment variables middleware.
 */
module.exports = ( req, res, next ) => 
{
	/**
	 * Get env name.
	 */
	res.locals.env = process.env.NODE_ENV; 
	
	next();
};