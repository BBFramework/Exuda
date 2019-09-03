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
 * File: ./appx.js
 *============================================================================
 */

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf'); 
const guest = require('./middlewares/guest'); 
const local = require('./middlewares/local'); 
const html = require('./middlewares/html'); 
const func = require('./middlewares/func'); 
const envs = require('./middlewares/envs'); 
const csrf = require('./middlewares/csrf'); 
const i18n = require('./middlewares/i18n'); 
const numeral = require('./middlewares/numeral');
const moment = require('./middlewares/moment');
const mailer = require('./middlewares/mailer');
const dbSource = require('./configs/db'); 
const credentials = require('./configs/credentials'); 
const adminRouter = require('./routes/admin'); 
const apiRouter = require('./routes/api'); 
const indexRouter = require('./routes/index'); 
const memberRouter = require('./routes/member'); 

/** 
 * General app settings. 
 */
const app = express();

/**
 * Local middleware applied.
 */
app.use(local); 

/**
 * The 'public' dir config for assets.
 */
app.use(express.static(path.join(__dirname, 'resources/public'))); 

/**
 * Get global access.
 */
app.use(envs);

/**
 * Html middleware applied.
 */
app.use(html); 

/**
 * Function middleware applied.
 */
app.use(func); 

/**
 * NumeralJS middleware applied.
 */
app.use(numeral); 

/**
 * MomentJS middleware applied.
 */
app.use(moment); 

/**
 * NodeMailer middleware applied.
 */
app.use(mailer); 

/**
 * Logger middleware. 
 */
switch(app.get('env')) 
{
	case 'development': 
		app.use(require('morgan')('dev')); 	// compact, colorful dev logging.
	break; 
		
	case 'production': 
	default: 
		app.use(require('express-logger')({
			path: __dirname + '/tmp/logs/requests.log', 
		}));
	break;
}

/**
 * JSON middleware.
 */
app.use(express.json()); 

/**
 * URLEncoding middleware.
 */
app.use(express.urlencoded({ extended: false }));

/**
 * Cookie Parser middleware.
 */
app.use(cookieParser(credentials.cookieSecret)); 

/**
 * The session middleware.
 */
app.use(cookieSession(credentials.sessionSecret)); 

/**
 * Locate middleware. 
 */
app.use(i18n); 

/**
 * Cross-site request forgery defence.
 */
app.use(csurf()); 

/**
 * Get global access for csrf.
 */
app.use(csrf);

/**
 * Session settings.
 */
app.set('trust proxy', 1); 

/**
 * Guest middleware applied.
 */
app.use(guest);

/**
 * Some main routes. It's import three router 
 * includes: 
 * 	- indexRoute: contains apps about website information
 *	  had been published widely.
 */
app.use('/', indexRouter);

/**
 *	- usersRoute: contains apps about member of website
 *	  services that provided by service providers. 
 */
app.use('/member', memberRouter);

/**
 *	- adminRoute: contains apps used to directs operations
 *	  of website services.
 */
app.use('/admin', adminRouter);

/**
 *	- apiRoute: contains the restful api for webservice.
 */
app.use('/api', apiRouter);

/**
 * Error handler.
 */
app.use((req, res, next) => 
{
	// Return 404 handler.
	next( res.locals.abort(404, 'Your request could not found') );
});

// error handler
app.use((err, req, res, next) => 
{
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error', 
	{
		error: {
			status: err.status, 
			title: "Internal Server Error",
		}, 
	});
});

/**
 * View and templates engine, this section redfine some
 * settings for View. This application 
 */
app.engine('ejs', require('ejs-mate'));
app.set('view options', { delimiter: '?' });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/templates'));

/**
 * Load data source.
 */
dbSource( app.get('env') ); 

module.exports = app;
