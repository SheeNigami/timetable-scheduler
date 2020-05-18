var express = require('express');
var app = express();
app.use(express.static('../frontend', {index: 'index.html'}))

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
app.use(urlencodedParser);

module.exports = app;