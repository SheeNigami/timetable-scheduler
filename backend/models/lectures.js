var db = require('./databaseConfig.js');

var pgp = require('pg-promise')({
    capSQL: true 
});
const cs = new pgp.helpers.ColumnSet(['lectureId', 'facultyId', 'semesterId', 'dayOfWeek', 'startTime', 'endTime'], {table: 'lectures'});

const Lectures = {
    getAllLectures: function() {
        return db.any('SELECT * FROM Lectures')
    },
    getDaysLectures: function(facultyId, semesterId, dayOfWeek) {
        return db.any('SELECT * FROM Lectures WHERE "facultyId" = $1 AND "semesterId" = $2 AND "dayOfWeek" = $3', [facultyId, semesterId, dayOfWeek]);
    },
    insertLectures: function(data) { 
        const query = pgp.helpers.insert(data, cs);
        return db.none(query);
    },
    deleteLectures: function() {
        return db.any('DELETE FROM Lectures');
    }
};

module.exports = Lectures;