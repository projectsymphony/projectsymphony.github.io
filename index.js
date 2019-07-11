const http = require('http');
const express = require('express');
const mysql = require('mysql');
const path = require('path');

//Starting Express.js app
const app = express();
app.listen('99', () => {
    console.log('Server started on port 99')
});

//Loading in default HTML page
app.get('/', (req, res) => {
    console.log("Loading index.html...")
    res.sendFile(path.join(__dirname + '/index.html'));
});
