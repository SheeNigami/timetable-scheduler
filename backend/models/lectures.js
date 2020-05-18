var db = require('./databaseConfig.js');

const Lectures = {
    getAllLectures: function() {
        return new Promise((resolve, reject) => {
            let getAllLecturesQuery = 
            `
            SELECT * FROM lectures;
            `

            db.query(getAllLecturesQuery, (err, allLectures) => {
                if (err) {
                    return reject(err);
                }
                resolve(allLectures);
            })
        })
    },
};

module.exports = Lectures;