const	express = require('express'),
	mg = require('mongoose');
let noteSchema = mg.Schema({
	title: String,
	text: String
});
let db = mg.model('mlab', noteSchema);
module.exports = db;
