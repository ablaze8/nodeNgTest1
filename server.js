'use strict';
var http = require('http');
var express = require('express');
var port = process.env.port || 1337;
var app = express();
var controllers = require('./controllers');

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

// view engine
app.set('view engine', 'vash');

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
