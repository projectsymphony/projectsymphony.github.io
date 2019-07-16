const http = require('http');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
var db = require('./../db')
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

module.exports = router;
