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
 * File: ./controllers/loginController.js
 *======================================================================================
 */
const { check, validationResult } = require('express-validator');		// Require some validator package.

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
				check( 'mail' ).isEmail().withMessage( "Must be an email." ), 
				check( 'password' ).isLength( {min: 5, max: 16} ).withMessage( "Must be at least 5 chars long." ) 
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
		title: res.locals.__( "Đăng nhập" ), 
	}; 
	
	// Render the login page.
	res.render( 'login', result );
};

/**
 * Retrives and process login request.
 */
exports.process = async ( req, res, next ) => 
{
	// Get default result.
	var result = {
		title: res.locals.__( "Đăng nhập" ), 
		old: req.body, 
	};
	
	try 
	{
		validationResult( req ).throw(); 
		
		// PASS passed codes is go to here.	
		res.json( result ); 
	} 
	catch(err) 
	{
		// Import errors variable.
		result['errors'] = err.mapped(); 
		
		// Render the login fail.
		res.render( 'login', result ); 
	}
};
