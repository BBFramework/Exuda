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
 * File: ./controllers/passwordResetController.js
 *======================================================================================
 */
const { check, validationResult } = require('express-validator');	// Import validator packages.

/**
 * Defines some validators.
 */
exports.validate = ( method ) => 
{
	// Go to needle method for validation.
	switch( method ) 
	{
		case 'process': 
			return [ 
				check( 'mail' ).isEmail().normalizeEmail().withMessage( 'Must be an email.' ), 
			]; 
	}
};

/**
 * Defines the index action. 
 */
exports.index = ( req, res, next ) => 
{
	// Get the default result.
	let result = {
		title: res.locals.__( "Khôi phục mật khẩu" ), 
	}; 
	
	// Render password reset page.
	res.render( 'password-reset', result ); 
}; 

/**
 * Retrives and process password reset request.
 */
exports.process = async ( req, res, next ) => 
{
	// Get the result.
	var result = {
		title: res.locals.__( "Khôi phục mật khẩu" ), 
		old: req.body, 
	}; 
	
	try 
	{
		validationResult( req ).throw();

		// PASS passed codes is go to here.
		// Make a password reset request confirm here.
		// Send an email the password reset request. 
		// Render password reset page.
		res.json( result );
	}
	catch(err) 
	{
		result['errors'] = err.mapped(); 
		
		// Render password reset page.
		res.render( 'password-reset', result ); 
	}
};
