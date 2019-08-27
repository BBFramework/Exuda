// File: ../controllers/aboutController.js

exports.index = ( req, res, next ) => 
{
	res.render( 'about', 
	{
		title: 'Thông tin' 
	});
}