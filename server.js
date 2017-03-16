'use strict';
var port = process.env.port || 1337;
var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./controllers');

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

// view engine
app.set('view engine', 'vash');

// let node know to avail (only) 'public' dir as static resource dir
// __dirname = root of nodejs application
app.use(express.static(__dirname + '/public'));

// controllers
controllers.init(app);

app.get('/api/users', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send({name: 'aarsh', isValid: true, group: 'admin'});
});

var server = http.createServer(app);
server.listen(port, function(){
    console.log('application listening on: ', port);
});
