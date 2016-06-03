var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.get('/', function(req,res){
	res.send('Hello');
	res.end();
});
app.get('/sato', function(req, res){
	res.send('Sato page');
	res.end();
});
app.get('/github', function(req,res){
	res.send('GithubPage here');
	res.end();
});
app.listen(port,function(){
	console.log('server listenning to port 8080');
});
