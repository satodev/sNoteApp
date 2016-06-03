const express = require('express');
let app = express();
let port = process.env.PORT || 8080;
app.get('/',(req,res)=>{
	res.send('Hello');
	res.end();
});
app.get('/sato', (req, res)=>{
	res.send('Sato page');
	res.end();
});
app.listen(port,()=>{
	console.log('server listenning to port 8080');
});
