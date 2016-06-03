const 	express = require('express'),
	mg = require('mongoose'),
	db = require('../db/main.js'),
	routes = express.Router(),
	user = 'sato',
	pwd = 'sato',
	mongoDbURL = 'mongodb://'+user+':'+pwd+'@ds011442.mlab.com:11442/mlab';
let connect = ()=>{
	mg.connect(mongoDbURL);
}
let disconnect = ()=>{
	mg.connection.close();
}
routes.get('/', (req, res)=>{
	res.render('index');
});
routes.get('/notes', (req,res)=>{
	connect();
	myNote = new db({
		title : req.body.title,
		text: req.body.text
	});
	myNote.save((err,note)=>{
		if(err) console.log(err);
		console.log(note);
	});
	res.send('ok');	
});
routes.post('/notes', (req,res)=>{
	console.log(req.body.title, req.body.text);
	res.send({title: req.body.title, text: req.body.text});
});
routes.put('/notes', (req,res)=>{
	console.log('update'+ req.body.id + ' ' + req.body.title);
	res.send('update');
});
routes.delete('/notes', (req,res)=>{
	console.log('delete' + req.body.id);
	res.send('deleted');
});
module.exports = routes;
