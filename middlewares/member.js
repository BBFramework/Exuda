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
 * File: ./middlewares/member.js
 *======================================================================================
 */

/**
 * Export the json with member data. This is used to auth
 * for member access the page.
 */
module.exports = ( req, res, next ) => 
{
	// Defines black list.
	const denies = ['guest']; 
	
	// Check the user role.
	if( 0>denies.indexOf(req.session.auth['type']) ) 
		// Passing the member auth.
		return next(); 
	else
		// Redirect to login page.
		res.redirect( '/login' );
};