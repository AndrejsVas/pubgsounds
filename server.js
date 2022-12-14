var express = require('express');
var app = express();
var config = require('./config.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(morgan('dev'));
// //Add a body parser for POST requests
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname +  '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
var apiRouter = require('./app/routes/apirouter.js')(app,express);
app.use('/api',apiRouter);

//function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    //if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    //    return res.redirect('https://' + req.get('host') + req.url);
    //}
    //next();
//}
//app.use(requireHTTPS);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
app.get('*' ,function(req,res,next){
    res.sendFile(__dirname + '/index.html');
});
try{
mongoose.connect('mongodb+srv://opikol:solo322@cluster0.i3es5os.mongodb.net/pubgsounds_db?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
);
var port = process.env.PORT || 8000
}
catch(e){
console.log("could not connect to mongodb")
}
app.listen(port, function() {
    console.log("App is running on port " + port);
});
