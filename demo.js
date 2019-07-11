const mysql = require('mysql');
const express = require('express');
const http = require('http');

// Creating connection
const db = mysql.createConnection({
    host: "35.231.65.224",
    user: "root",
    password: 'aH5ckblhF084kpCI',
    database: "Symphony"
});

// Connecting to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connection established!");
})

// Starting app on Express
const app = express();

app.listen('3000', () => {
    console.log('Server started on port 3000')
});

app.get('/insertTable', (req, res) => {
    let sql = "INSERT INTO post (author, date, content) VALUES ('Pogchamp', 'today', 'poggers');";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Data inserted!")
    })
})

/*
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