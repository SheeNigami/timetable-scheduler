// var pg = require('pg');
var pgp = require('pg-promise')({
    capSQL: true 
});

var conString = "postgres://vjlwiciy:CIkK-1B9JBbAet-PFyQLoKttC9B0Je75@arjuna.db.elephantsql.com:5432/vjlwiciy" //Can be found in the Details page
// var client = new pg.Client(conString);
const client = pgp(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

module.exports = client;