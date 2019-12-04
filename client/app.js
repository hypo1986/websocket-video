var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.send('<h1>Welcome client</h1>');
});

server.listen(8282, function listening() {
    console.log('ok！');
});
