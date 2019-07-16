const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '35.231.65.224',
    user: 'root',
    password: 'aH5ckblhF084kpCI',
    database: 'Symphony'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = {connection: connection};