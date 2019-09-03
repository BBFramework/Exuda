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
 * File: ./routes/admin.js
 *============================================================================
 */

const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/admin/indexController.js'); 

/**
 * Middleware for basic authentication.
 */
router.use( require('../middlewares/admin') ); 

/**
 * Middleware for current active
 */
router.use((req, res, next) => 
{
	res.locals.isDashboard 	= 0>req.path.indexOf('/')&&req.path.length==1; 
	res.locals.isUsers 		= 0>req.path.indexOf('/users'); 
	res.locals.isTasks 		= 0>req.path.indexOf('/tasks'); 
	res.locals.isCategories = 0>req.path.indexOf('/categories'); 
	res.locals.isArticles 	= 0>req.path.indexOf('/articles'); 
	res.locals.isPages 		= 0>req.path.indexOf('/pages'); 
	res.locals.isMessages 	= 0>req.path.indexOf('/messages'); 
	res.locals.isTags 		= 0>req.path.indexOf('/tags'); 
	res.locals.isAccount 	= 0>req.path.indexOf('/account'); 
	res.locals.isUpload		= 0>req.path.indexOf('/media/audio') || 
							  0>req.path.indexOf('/media/photo') || 
							  0>req.path.indexOf('/media/video') || 
							  0>req.path.indexOf('/media/compression') || 
							  0>req.path.indexOf('/media/other'); 
	next(); 
});

/**
 * Route admin application.
 */
router.get( '/', IndexController.index );

module.exports = router;
