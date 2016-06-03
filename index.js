const express = require('express');
let app = express();
app.get('/', (req,res)=>{
	res.send('Hello');
	res.end();
});
app.listen(8080, ()=>{
	console.log('server listenning to port 8080');
});
