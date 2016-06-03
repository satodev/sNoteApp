var express = require('express');
var app = express();
app.get('/', function(req,res){
	res.send('Hello');
	res.end();
});
app.listen(8080, function(){
	console.log('server listenning to port 8080');
});
