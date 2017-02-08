var express = require('express');
var bodyParser = require('body-parser');
var app=express();
var port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send',function(req,res){
	var data=req.body.x;
	var sqr=data*data;
	var result ={'sqr':sqr};
	console.log(result);
	res.json(result);
});
app.listen(port);
console.log('Server up @ port ' + port);
