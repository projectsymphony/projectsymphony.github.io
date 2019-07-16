const http = require('http');
const express = require('express');
const expressValidator = require('express-validator')
const expressSession = require('express-session')
const expressMessages = require('express-messages')
const router = express.Router();
const mysql = require('mysql');
var db = require('./../db')
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, (req, res) => {
    console.log(req.body);
    var sql_ins = "INSERT INTO post(author, date, title, description, tags, location, time) VALUES(" + "'" + req.body.author + "'" + "," + "'" + req.body.date + "'" + "," + "'" + req.body.title + "'" + "," + "'" + req.body.description + "'" + "," + "'" + req.body.tags + "'" + "," + "'" + req.body.location + "'" + "," + "'" + req.body.time + "');";
    db.connection.query(sql_ins, function (error, results, fields) {
    });
    res.redirect('/');
    // str = str.replace('abc', '');
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
