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
 * File: ./controllers/homeController.js
 *============================================================================
 */

exports.index = (req, res, next) => 
{
	res.render( 'index', 
	{
		title: 'Trang chủ' 
	});
};