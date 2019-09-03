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
 * File: ./middlewares/html.js
 *============================================================================
 */
 
/**
 * Html middleware.
 */
module.exports = ( req, res, next ) => 
{
	/**
	 * Defines link function, that is generate a link.
	 */
	res.locals.link = ( anchor, title ) => 
	{
		return '<a href="'+anchor+'">'+title+'</a>';
	} 
	
	next();
};