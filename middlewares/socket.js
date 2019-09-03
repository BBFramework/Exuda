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
 * File: ./middlewares/socket.js
 *============================================================================
 */

/**
 * Listen socket io belong application server.
 */
exports.listen = (server) => 
{
	/**
	 * Import socket and attach it to server process.
	 */
	const io = require('socket.io')(server);
	
	/**
	 * Define the connection event of socker. It would be fired when
	 * a user connect to.
	 */
	io.on('connection', (socket) => 
	{
		console.log("Connected.");
		socket.emit('news', { hello: 'world' });
		socket.on('my other event', (data) => 
		{
			console.log(data);
		});
	}); 
	
	// Return the result socker.io object. 
	return io;
}