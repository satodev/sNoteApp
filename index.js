const 	express = require('express'),
	mg = require('mongoose'),
	db = require('./db/main.js'),
	routes = require('./routes/main.js'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT || 8080;

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use('/views', express.static(__dirname+'/views'));
app.use('/node_modules', express.static(__dirname+'/node_modules'));
app.listen(port,()=>{
	console.log('server listenning to port'+ port);
});
