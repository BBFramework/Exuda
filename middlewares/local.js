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
 * File: ./middlewares/local.js
 *============================================================================
 */

/**
 * Export local data.
 */
module.exports = ( req, res, next ) => 
{
	/**
	 * Get the request uri.
	 */
	res.locals.uri = req.originalUrl; 
	
	/**
	 * Get the request method.
	 */
	res.locals.method = req.method; 
	
	/**
	 * The the domain.
	 */
	res.locals.domain = req.headers.host; 
	
	/**
	 * The abort function.
	 */
	res.locals.abort = ( code, message ) => 
	{
		switch(code) 
		{
			/**
			 * The 500 error callback.
			 */
			case 500: 
				res.status( 500 ).render( 'custom-error', {
					error: { 
						status: 500, 
						title: 'Internal Server Error', 
						tryAgain: true, 
					}, 
					message: message || "Woops! You have a internal server error.", 
				}); 
			break;
			
			/**
			 * The 408 error callback.
			 */
			case 408: 
				res.status( 408 ).render( 'custom-error', {
					error: { 
						status: 408, 
						title: 'Request Timeout',
						tryAgain: true, 
					}, 
					message: message || "Woops! Looks like your request is timeout.", 
				}); 
			break; 
			
			/**
			 * The 404 error callback.
			 */
			case 404: 
				res.status( 404 ).render( 'custom-error', {
					error: { 
						status: 404, 
						title: 'Not Found', 
						tryAgain: true, 
					}, 
					message: message || "Woops! Looks like your page couldn't found.", 
				}); 
			break;
			
			/**
			 * The 403 error callback.
			 */
			case 403: 
				res.status( 403 ).render( 'custom-error', {
					error: {
						status: 403, 
						title: 'Forbidden',
						tryAgain: false, 
					}, 
					message: message || "Woops! Looks like you have deny from this request.", 
				}); 
			break;
			
			/**
			 * The 401 error callback.
			 */
			case 401: 
				res.status( 401 ).render( 'custom-error', {
					error: { 
						status: 401, 
						title: 'Unauthorized',
						tryAgain: false, 
					}, 
					message: message || "Woops! Looks like you haven't authorized.", 
				}); 
			break; 

			/**
			 * The 400 error callback.
			 */
			case 400: 
				res.status( 400 ).render( 'custom-error', {
					error: { 
						status: 400, 
						title: 'Bad Reques',
						tryAgain: true, 
					}, 
					message: message || "Woops! Looks like your request is invalid.", 
				}); 
			break;
		} 
	} 
	
	return next();
};