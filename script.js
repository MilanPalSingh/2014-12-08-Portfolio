// var connect = require('connect');

// var app = connect()
// 	.use(connect.static('public'))
// 	.use(function (req, res) {
// 		res.end("Couldn't find it.");
// 	})
// 	.listen(3001);

var express = require('express');

var app = express();
app.use(express.static('public'));

app.get('/index',function(req,res){
	res.send('we are in the index file');
});

app.listen(3001);