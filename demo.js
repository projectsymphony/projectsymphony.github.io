const mysql = require('mysql');
const express = require('express');
const http = require('http');

var con = mysql.createConnection({
    host: "35.231.65.224",
    user: "root",
    password: "aH5ckblhF084kpCI",
    database: "Symphony"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

/*
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "35.231.65.224",
    user: "root",
    password: "aH5ckblhF084kpCI",
    database: "Symphony"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO post (author, date, content) VALUES ('Pogchamp', 'today', 'poggers');";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Inserted successfully!");
    });
    var sql = "INSERT INTO post (author, date, content) VALUES ('Gamer helmet', 'today', 'gamer socks');";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Inserted successfully!");
    });
    var sql = "INSERT INTO post (author, date, content) VALUES ('son qbert', 'today', 'YEAHAHHHHHH');";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Inserted successfully!");
    });
});
*/