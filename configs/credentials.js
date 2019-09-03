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
 * File: ./configs/credentials.js
 *======================================================================================
 */

module.exports = {
	
	/**
	 * The cookie secret string for cookie security.
	 */
	cookieSecret: 'forever', 
	
	/**
	 * The session secret string to session security.
	 */
	sessionSecret: {
		name: 'session', 
		keys:[
			'key1', 
			'key2', 
		], 
	}, 
	
	/**
	 * The mongodb connect string, it contains two strings, 
	 * one for development enviroment, and one for production 
	 * enviroment.
	 */
	db: {
		development: { connectString: 'mongodb://admin:root@localhost:27017/mydb?authSource=admin' }, 
		production: { connectString: 'mongodb://admin:root@localhost:27017/mydb?authSource=admin' }, 
	}, 
	
	/**
	 * The mail authentication credential. This option could be 
	 * modify with. 
	 */
	mailer: {
		username: "vuhuycuongtest@gmail.com", 
		password: "!234!qaz"
	}, 
	
};