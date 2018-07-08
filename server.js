var express = require('express');
var app = express();
var config = require('./config.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

app.use(morgan('dev'));
// //Add a body parser for POST requests
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname +  '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules/angular'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/' ,function(req,res,next){
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8000
app.listen(port, function() {
    console.log("App is running on port " + port);
});
/*
app.listen(config.port);
console.log('Application started at port ' + config.port);
*/
