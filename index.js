const 	express = require('express'),
	app = express(),
	port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
	res.send('Hello');
	res.end();
});
app.get('/sato',(req, res)=>{
	res.send('Sato page');
	res.end();
});
app.get('/github', (req,res)=>{
	res.send('GithubPage here');
	res.end();
});
app.listen(port,()=>{
	console.log('server listenning to port'+ port);
});
