const http = require('http');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
var db = require('./../db')
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// // establishing connection to database
// var connection = mysql.createConnection({
//     host: '35.231.65.224',
//     user: 'root',
//     password: 'aH5ckblhF084kpCI',
//     database: 'Symphony'
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

router.post('/', urlencodedParser, (req, res) => {
    console.log(req.body);
    var sql_ins = "INSERT INTO post(author, date, title, description, tags, location, time) VALUES(" + "'" + req.body.author + "'" + "," + "'" + req.body.date + "'" + "," + "'" + req.body.title + "'" + "," + "'" + req.body.description + "'" + "," + "'" + req.body.tags + "'" + "," + "'" + req.body.location + "'" + "," + "'" + req.body.time + "');";
    db.connection.query(sql_ins, function (error, results, fields) {
    });
    res.redirect('/');
});

router.get('/', (req, res) => {
    var sql_req = "SELECT * FROM post;";
    db.connection.query(sql_req, function (error, results, fields) {
        res.render('index', { data: results });

    });
});

router.get('/new', (req, res) => {
    res.render('new');
})

module.exports = router;
