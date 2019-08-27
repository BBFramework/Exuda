// File: ../controllers/admin/indexController.js

exports.index = ( req, res, next ) => 
{
	res.render( 'admin/index', 
	{
		title: 'Admin' 
	});
}