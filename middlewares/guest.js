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
 * File: ./middlewares/guest.js
 *============================================================================
 */

/**
 * Export the json with guest data. This is used to auth
 * for guest visits the page.
 */
module.exports = ( req, res, next ) => 
{
	// Check the user authentication is exist.
	if( undefined == req.session.auth )
	{
		req.session.auth = {
			name: 'Guest', 
			username: 'guest', 
			type: 'guest', 
		}; 
	}
	return next();
};