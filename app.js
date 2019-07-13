const http = require('http');
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const ejs = require('ejs');

//Starting Express.js app
const app = express();

//Establishing connection to database
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

var sql = "SELECT * FROM post;";
connection.query(sql, function(error, results, fields){
    localResults = results;
    // get homepage with database entries
    app.get('/', (req, res) => {
        res.render('index', {data: results});
    });
});

//Setting View Engine
app.set('view engine', 'ejs')

//Using Stylesheets
app.use('/static', express.static('static'))

//starting server on port 3000
app.listen('3000', () => {
    console.log('Server started on port 3000')
});
