var cookieSession = require('cookie-session')
var express = require('express')
const cookieParser = require('cookie-parser');
var app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use(cookieParser())

app.get('/', function (req, res, next) {
	
	if(req.cookies.coffee) 
	{
		console.log(req.cookies.coffee);
	} 
	else 
	{
		res.cookie('coffee', 'da');
	}
		
	// Update views
	req.session.views = (req.session.views || 0) + 1

	// Write response
	res.end(req.session.views + ' views')
})

app.listen(3000)