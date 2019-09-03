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
 * File: ./configs/db.js
 *============================================================================
 */
 
const mongoose = require('mongoose');		// Import the mongoose package.

//require chalk module to give colors to console text. 
const chalk = require('chalk');

//require database URL from properties file. 
const credential = require('./credentials').db;

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;
const options = {
	keepAlive: 1, 
	poolSize: 2,
	useNewUrlParser: true
};

//export this function and imported by server.js. 
module.exports = ( env ) => 
{
	switch(env) 
	{
		case 'development': 
			var dbURL = credential.development.connectString;
		break;
		
		case 'production': 
		default: 
			var dbURL = credential.production.connectString;
		break; 
	}
	
	// Connect to mongodb.
	mongoose.connect(dbURL, options);

	// Bind connected event listener.
    mongoose.connection.on('connected', () => 
	{
        console.log(connected("Mongoose default connection is open to ", dbURL));
    });

	// Bind error event listener.
    mongoose.connection.on('error', ( err ) => 
	{
        console.log(error("Mongoose default connection has occured "+err+" error"));
    });

	// Bind disconnected event listener.
    mongoose.connection.on('disconnected', () => 
	{
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

	// Bind shutdown event listener of node process.
    process.on('SIGINT', () => 
	{
		// Close the mongo database connection.
        mongoose.connection.close( () => 
		{
            console.log(termination("Mongoose default connection is disconnected due to application termination")); 
            process.exit(1); 
        });
    }); 
}