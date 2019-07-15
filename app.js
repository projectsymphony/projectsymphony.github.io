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
// app.use('users', require('./routes/users'));

//starting server on port 3000
app.listen('3000', () => {
    console.log('Server started on port 3000')
});

module.exports = router;
