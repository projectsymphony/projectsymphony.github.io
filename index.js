const express = require('express');
const mysql = require('mysql');
const path = require('path');

//Starting Express.js app
const app = express();
app.listen('99', () => {
    console.log('Server started on port 99')
});

app.use('/static', express.static('static'))

//Loading in default HTML page
app.get('/', (req, res) => {
    console.log("im philip");
    res.sendFile(path.join(__dirname + '/index.html'));
});
