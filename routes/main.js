const 	express = require('express'),
	mg = require('mongoose'),
	db = require('../db/main.js'),
	routes = express.Router(),
	user = 'sato',
	pwd = 'sato',
	mongoDbURL = 'mongodb://'+user+':'+pwd+'@ds011442.mlab.com:11442/mlab';

routes.get('/', (req, res)=>{
	res.render('index');
});
routes.get('/notes', (req,res)=>{
	mg.connect(mongoDbURL);
	db.find((err, notes)=>{
		if(err) console.log(err);
		console.log(notes);		
		res.send(notes);
		mg.connection.close();	
	});
});
routes.post('/notes', (req,res)=>{
	console.log(req.body.title, req.body.text);
	mg.connect(mongoDbURL);
	myNote = new db({
		title : req.body.title,
		text: req.body.text
	});
	myNote.save((err,note)=>{
		if(err) console.log(err);
		console.log(note);
		mg.connection.close();
	});
	res.send({title: req.body.title, text: req.body.text});
});
routes.put('/notes', (req,res)=>{
	console.log('update'+ req.body.id + ' ' + req.body.title);
	res.send('update');
});
routes.delete('/notes', (req,res)=>{
	console.log(req.body); //pourquoi -> req.body == {}; ?
	res.send('deleted');
});
module.exports = routes;
