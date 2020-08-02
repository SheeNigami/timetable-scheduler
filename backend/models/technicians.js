var db = require('./databaseConfig.js');

var pgp = require('pg-promise')({
    capSQL: true 
});
const cs = new pgp.helpers.ColumnSet(['technicianId', 'semesterId', 'facultyId', 'dayOfWeek', 'startTime', 'endTime'], {table: 'technicians'});

const Technicians = {
    getAllTechnicians: function() {
        return db.any('SELECT * FROM technicians')
    },
    insertTechnicians: function(data) { 
        const query = pgp.helpers.insert(data, cs);
        return db.none(query);
    }
};

module.exports = Technicians;