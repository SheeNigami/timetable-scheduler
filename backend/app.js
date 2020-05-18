var express = require('express');
var app = express();
app.use(express.static('../frontend', {index: 'index.html'}))

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
app.use(urlencodedParser);

var Lectures = require('./models/lectures.js');

app.get('/lectures', (req, res) => {
    Lectures.getAllLectures().then((allLectures) => {
        res.status(200).send(allLectures);
    }).catch((err) => {
        console.log(err);
        res.status(500).send();
    });
});

module.exports = app;