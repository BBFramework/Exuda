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
 * File: ./middlewares/csrf.js
 *============================================================================
 */
 
/**
 * Cross site request forgery middleware.
 */
module.exports = ( req, res, next ) => 
{
	/**
	 * Make an csrf token for the current request.
	 */
	res.locals._csrf = req.csrfToken(); 
	
	/**
	 * Make an csrf token method for get the current csrf string.
	 */
	res.locals.csrf = res.locals.__csrf = () => req.csrfToken(); 
	
	next();
};