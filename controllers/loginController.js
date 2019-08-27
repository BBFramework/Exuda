// File: ../controllers/loginController.js

exports.index = ( req, res, next ) => 
{
	res.render( 'login', 
	{
		title: 'Đăng nhập'
	});
}