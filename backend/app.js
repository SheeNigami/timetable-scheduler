// Libraries
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.static('../frontend', {index: 'index.html'}));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
app.use(urlencodedParser);

// Models
var Lectures = require('./models/lectures.js');
var Technicians = require('./models/technicians.js');

// Algorithms
var Algos = require('./algo.js');

// Reset database
app.get('/reset', (req, res) => {
    Lectures.deleteLectures().then(() => {
        Technicians.deleteTechnicians().then(() => {
            res.status(200).send({"results": "success"});
        }).catch((err) => {
            res.status(500).send({"error": "There was a server error!", 'code': err.code});
        })
    }).catch((err) => {
        res.status(500).send({"error": "There was a server error!", 'code': err.code});
    })
});

// Get all basic data
app.get('/basic/data', (req, res) => {
    Lectures.getAllLectures().then((allLectures) => {
        res.status(200).send(allLectures);
    }).catch((err) => {
        res.status(500).send({"error": "There was a server error!", 'code': err.code});
    });
});

// Bulk insert for basic
app.post('/basic/insert', (req, res) => {
    const cols = ['lectureId', 'facultyId', 'semesterId', 'dayOfWeek', 'startTime', 'endTime'];
    let data = req.body.data;

    if (!(checkInputs(cols, data))) {
        res.status(500).send({"error": "Invalid input(s)", "code": 1});
    } else {
        Lectures.insertLectures(data).then(() => {
            res.status(201).send({'results': 'success'});
        }).catch((err) => {
            res.status(500).send({"error": err.detail, 'code': err.code});
        });
    }
}); 

// Get result for basic
app.get('/basic/result', (req, res) => {
    let facultyId = req.query.facultyId;
    let semesterId = req.query.semesterId;
    let dayOfWeek = req.query.dayOfWeek;

    // If any are undefined/null
    if (!facultyId || ! semesterId || !dayOfWeek) {
        res.status(500).send({"error": "Required params not present (All facultyId, semesterId, dayOfWeek", "code": 11});
    }

    Lectures.getDaysLectures(facultyId, semesterId, dayOfWeek).then((dayLectures) => {
        res.status(200).send(Algos.basicAlgo(dayLectures));
    }).catch((err) => {
        res.status(500).send({"error": "There was an error with getting the day's lectures", "code": err.code});
    });
});

// Get all advance data
app.get('/advance/data', (req, res) => {
    Technicians.getAllTechnicians().then((allTechnicians) => {
        res.status(200).send(allTechnicians);
    }).catch((err) => {
        res.status(500).send({"error": "There was a server error!", 'code': err.code});
    });
});

// Bulk insert for advanced
app.post('/advance/insert', (req, res) => {
    const cols = ['technicianId', 'semesterId', 'facultyId', 'dayOfWeek', 'startTime', 'endTime'];
    let data = req.body.data;
    
    if (!(checkInputs(cols, data))) {
        res.status(500).send({"error": "Invalid input(s)", "code": 1});
    } else {
        Technicians.insertTechnicians(data).then(() => {
            res.status(201).send({'results': 'success'});
        }).catch((err) => {
            res.status(500).send({"error": err.detail, 'code': err.code});
        });
    }
});

// Get result for advanced
app.get('/advance/result', (req, res) => {
    
});

// Input validation for bulk inserts
function checkInputs(cols, data) {
    // Check is no data/empty data
    if (typeof(data) == 'undefined' || data == [] || data == {}) {
        return false;
    }
    for (const row of data) {
        for (const col of cols) {
            if (!(col in row)) {
                return false;
            }
            if (col == 'lectureId' || col == 'technicianId' || col == 'facultyId' || col == 'semesterId') {
                if(!(checkTenDigitId(row[col]))) {
                    return false;
                }            
            }
            if (col == 'dayOfWeek') {
                if (!(checkDayOfWeek(row[col]))) {
                    return false;
                }
            }
            if (col == 'startTime' || col == 'endTime') {
                if (!(checkTime(row[col]))) {
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