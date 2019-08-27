// File: ../controllers/registryController.js

exports.index = ( rea, res, next ) => 
{
	res.render( 'registry', 
	{
		title: 'Đăng ký'
	}); 
}