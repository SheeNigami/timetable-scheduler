var db = require('./databaseConfig.js');

var pgp = require('pg-promise')({
    capSQL: true 
});
const cs = new pgp.helpers.ColumnSet(['technicianId', 'semesterId', 'facultyId', 'dayOfWeek', 'startTime', 'endTime'], {table: 'technicians'});

const Technicians = {
    getAllTechnicians: function() {
        return db.any('SELECT * FROM technicians')
    },
    getDaysTechnicians: function(facultyId, semesterId, dayOfWeek) {
        return db.any('SELECT "lectureId", "startTime", "endTime" FROM Technicians WHERE "facultyId" = $1 AND "semesterId" = $2 AND "dayOfWeek" = $3', [facultyId, semesterId, dayOfWeek]);
    },
    insertTechnicians: function(data) { 
        const query = pgp.helpers.insert(data, cs);
        return db.none(query);
    },
    deleteTechnicians: function() {
        return db.any('DELETE FROM Technicians');
    }
};

module.exports = Technicians;