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

var empty = {};


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register', {errors: empty});
});

router.post('/register', urlencodedParser, (req, res) => {
    // var name = req.body.name;
    // var email = req.body.email;
    // var username = req.body.username;
    // var password = req.body.password;
    // var password2 = req.body.password2;
    // console.log(req.body);
    
    // req.checkBody('name', 'Name is required').notEmpty();
    // req.checkBody('email', 'Email is required').notEmpty();
    // req.checkBody('email', 'Email is not valid').isEmail();
    // req.checkBody('username', 'Username is required').notEmpty();
    // req.checkBody('password', 'Password is required').notEmpty();
    // req.checkBody('password2', 'Passwords do not match').equals(password);

    // var errors = req.validationErrors();
    // if(errors){
    //     res.render('register', {errors: errors});
    // } else {
        
    // }
});

module.exports = router;
