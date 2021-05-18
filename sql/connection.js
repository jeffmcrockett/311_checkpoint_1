const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'den1.mysql1.gear.host',
  user: 'jcdb',
  password: 'Oj73mp!121?z',
  database: 'jcdb'
});

connection.connect(function(err) {
  if(err){
    console.log('error connecting : ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId)
});

module.exports = connection;