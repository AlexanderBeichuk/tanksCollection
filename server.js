/**
 * Created by Alex on 27.12.2015.
 */
var port = 3000;

var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(app);
app.use(express.static(__dirname + "/app"));

server.listen(port);
console.log("listen on port 3000");