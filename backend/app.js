var express = require('express');
var app = express();
app.use(express.static('../frontend', {index: 'index.html'}))

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
app.use(urlencodedParser);

var Lectures = require('./models/lectures.js');

app.get('/basic/data', (req, res) => {
    Lectures.getAllLectures().then((allLectures) => {
        res.status(200).send(allLectures);
    }).catch((err) => {
        console.log(err);
        res.status(500).send();
    });
});

app.post('/basic/data', (req, res) => {
    const cols = ['lectureId', 'facultyId', 'semesterId', 'dayOfWeek', 'startTime', 'endTime'];
    let data = req.body.data;
    if (!(checkInputs(cols, data))) {
        res.status(500).send({"error": "Invalid input(s)", "code": 1});
    } else {
        Lectures.insertLectures(data).then(() => {
            res.status(201).send({'results': 'success'});
        }).catch((err) => {
            console.log(err);
            res.status(500).send({"error": err.detail, 'code': err.code});
        });
    }
}); 

function checkInputs(cols, data) {
    for (const row of data) {
        for (const col of cols) {
            if (!(col in row)) {
                return false;
            }
            if (col == 'lectureId' || col == 'facultyId' || col == 'semesterId') {
                if(!(checkTenDigitId(row[col]))) {
                    console.log(row[col]);
                    return false;
                }            
            }
            if (col == 'dayOfWeek') {
                if (!(checkDayOfWeek(row[col]))) {
                    console.log(row[col]);
                    return false;
                }
            }
            if (col == 'startTime' || col == 'endTime') {
                if (!(checkTime(row[col]))) {
                    console.log(row[col]);
                    return false;
                }
            }
        }
    }
    return true;
}

function checkTenDigitId(field) {
    var stringField = '' + field;
    if(stringField.match(/^\d{10}$/)) {
        return true;
    }
    return false;
}

function checkDayOfWeek(day) {
    const dayInt = parseInt(day);
    if (isNaN(dayInt) || !(dayInt <= 7 && dayInt > 0)) {
        return false;
    }
    return true;
}

function checkTime(time) {
    const timeHour = parseInt((time+'').substring(0,2));
    const timeMin = parseInt((time+'').substring(2,4));

    if (isNaN(timeHour) || isNaN(timeMin) || !(timeHour >= 0 && timeHour <= 23) || !(timeMin >= 0 && timeMin <= 59)) {
        return false;
    }
    return true;
}

module.exports = app;