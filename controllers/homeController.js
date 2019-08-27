// File: ../controllers/homeController.js

exports.index = (req, res, next) => 
{
	res.render( 'index', 
	{
		title: 'Trang chủ' 
	});
}