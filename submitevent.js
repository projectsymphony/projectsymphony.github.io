const mysql = require('mysql');
const fs = require('fs');

var con = mysql.createConnection({
    host: "35.231.65.224",
    user: "root",
    password: "aH5ckblhF084kpCI",
    database: "Symphony"
});

var author = ;
var date = ;
var title = ;
var description = ;
var tags = ;
var location = ;
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    CSVtoJSON().fromFile(process.argv[2]).then(grabbed => {
        for (var i = 0; i < grabbed.length; i++) {
            var sql = "INSERT INTO post (author, date, title, description, tags, location) VALUES (";
            var date = "9/9/1999";
            sql += "'" + grabbed[i].author + "',";
            sql += "'" + date + "',";
            sql += "'" + grabbed[i].title + "',";
            sql += "'" + grabbed[i].description + "',";
            sql += "'" + grabbed[i].tags + "',";
            sql += "'" + grabbed[i].location + "'";
            sql += ");";
            console.log(sql);
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Inserted successfully!");
            });
        };
    });
});
