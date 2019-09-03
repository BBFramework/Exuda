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
 * File: ./configs/i18n.js
 *============================================================================
 */

const fs = require('fs');
var path = require('path');

module.exports = ( req, res, next ) => 
{
	// Get root directory name.
	var rootDir = path.dirname(path.dirname(require.main.filename));
	
	// Get the check path.
	var checkPath = path.join(rootDir, 'reources/public'+req.path);
	
	var defaultLocale = 'en';
	
	try 
	{
		var stat = fs.statSync(checkPath); 
	} 
	catch( e ) 
	{
		if(!path.extname(checkPath).length) 
		{
			let rawdata = fs.readFileSync(path.join(rootDir, 'resources/locales/'+defaultLocale+'.json'));
			var variables = JSON.parse(rawdata); 
			res.cookie('lang', defaultLocale, { maxAge: 900000, httpOnly: true });
			res.locals.__ = (variable) => 
			{
				return variables[variable] || variable;
			} 
		}			
	}
	
	return next(); 
};