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
 * File: ./middlewares/admin.js
 *======================================================================================
 */

/**
 * Export the json with admin data. This is used to auth
 * for admin access the page.
 */
module.exports = ( req, res, next ) => 
{
	// Defines black list.
	const denies = ['guest', 'customer']; 
	
	// Check the user role.
	if( 0>denies.indexOf(req.session.auth['type']) ) 
		// Passing the admin auth.
		return next(); 
	else
		// Show the 404 to guest.
		res.locals.abort( 404 );
};