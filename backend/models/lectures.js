var db = require('./databaseConfig.js');

var pgp = require('pg-promise')({
    capSQL: true 
});
const cs = new pgp.helpers.ColumnSet(['lectureId', 'facultyId', 'semesterId', 'dayOfWeek', 'startTime', 'endTime'], {table: 'lectures'});

const Lectures = {
    getAllLectures: function() {
        return db.any('SELECT * FROM Lectures')
    },
    insertLectures: function(data) { // data is an array of lectures
        const query = pgp.helpers.insert(data, cs);
        return db.none(query);
    }
};

module.exports = Lectures;