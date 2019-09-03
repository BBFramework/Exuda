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
 * File: ./middlewares/func.js
 *======================================================================================
 */
 
/**
 * Function middleware.
 */
module.exports = ( req, res, next ) => 
{
	/**
	 * Defines link function, that is generate a link.
	 */
	res.locals.isset = ( element ) => 
	{
		return "undefined"!==element; 
	} 
	
	next();
};