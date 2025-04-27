const db = require('./db');

db.query('SHOW TABLES', (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Tables in database:', results);
  db.end(); // Close the connection
});