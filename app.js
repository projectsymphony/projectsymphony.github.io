const http = require('http');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// starting Express.js app
const app = express();

// setting view engine
app.set('view engine', 'ejs')

// using stylesheets
app.use('/static', express.static('static'))

//using routes
app.use('/', require('./routes/index'));

//starting server on port 3000
app.listen('3000', () => {
    console.log('Server started on port 3000')
});

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

// app.post('/', urlencodedParser, (req, res) => {
//     console.log(req.body);
//     var sql_ins = "INSERT INTO post(author, date, title, description, tags, location, time) VALUES(" + "'" + req.body.author + "'" + "," + "'" + req.body.date + "'" + "," + "'" + req.body.title + "'" + "," + "'" + req.body.description + "'" + "," + "'" + req.body.tags + "'" + "," + "'" + req.body.location + "'" + "," + "'" + req.body.time + "');";
//     connection.query(sql_ins, function (error, results, fields) {
//     });
//     res.redirect('/');
// });

// app.get('/', (req, res) => {
//     var sql_req = "SELECT * FROM post;";
//     connection.query(sql_req, function (error, results, fields) {
//         res.render('index', { data: results });

//     });
// });

// app.get('/new', (req, res) => {
//     res.render('new');
// })
module.exports = router;
