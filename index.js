const http = require('http');
const express = require('express');
const mysql = require('mysql');
const path = require('path');

//Starting Express.js app
const app = express();
app.listen('3000', () => {
    console.log('Server started on port 3000')
});

app.set('view engine', 'ejs')

app.use('/static', express.static('static'))

//Loading in default HTML page
app.get('/', (req, res) => {
    //console.log("im philip");
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.render('index.ejs');
});
