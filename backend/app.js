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

app.post('/lectures', (req, res) => {
    Lectures.insertLectures(req.body.data).then(() => {
        res.status(201).send({'results': 'success'});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({"error": err.detail, 'code': err.code});
    })
})

module.exports = app;