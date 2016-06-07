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
		res.send(notes);
		mg.connection.close();	
	});
});
routes.post('/notes', (req,res)=>{
	mg.connect(mongoDbURL);
	myNote = new db({
		title : req.body.title,
		text: req.body.text
	});
	myNote.save((err,note)=>{
		if(err) console.log(err);
		res.send({title: req.body.title, text: req.body.text});
		mg.connection.close();
	});
});
routes.put('/notes', (req,res)=>{
	if(req.body.id && req.body.title && req.body.text){
		mg.connect(mongoDbURL);
		db.findById(req.body.id, (err, notes)=>{
			if(err) console.log(err);
			notes.title = req.body.title;
			notes.text = req.body.text;
			notes.save((err)=>{
				if(err) console.log(err);
				res.send(notes);
				mg.connection.close();
			});
		});	
	}else{
		res.send('no update done');
	}
});
routes.delete('/notes/:id', (req,res)=>{
	mg.connect(mongoDbURL);
	db.findById(req.params.id,(err,notes)=>{
		if(err) console.log(err);
		notes.remove();
		mg.connection.close();
	});
	res.send('deleted');
});
module.exports = routes;
