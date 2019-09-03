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
 * File: ./controllers/registryController.js
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
				check( 'name' ).isLength( {min:5, max:32} ).withMessage( "Must be at least 5 chars long" ),
				check( 'mail' ).isEmail().withMessage( "Must be an email" ), 
				check( 're-mail' ).custom((value, {req})=>req.body.password===value).withMessage( "Confirm email is not match email" ), 
				check( 'password' )
					.isLength( {min:5, max:16} ).withMessage( "Must be at least 5 chars long" )
					.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{5,}$/i).withMessage( "Password is invalid, at least one number and one special character" ), 
				check( 're-password' ).custom((value, {req})=>req.body.password===value).withMessage( "Confirm password is not match password" ), 
				check( 'term-agree' ).isIn(['1']).withMessage( "Agree to term of use is required" ), 
			];
	}
}; 

/**
 * Defines the index action. 
 */
exports.index = ( rea, res, next ) => 
{
	// Get the default result.
	let result = {
		title: res.locals.__( "Đăng ký" ) 
	}; 
	
	// Render the registry page.
	res.render( 'registry', result ); 
}; 

/**
 * Retrives and process login request.
 */
exports.process = async ( req, res, next ) => 
{
	// Get default result.
	var result = {
		title: res.locals.__( "Đăng ký" ), 
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
		res.render( 'registry', result ); 
	}
};
