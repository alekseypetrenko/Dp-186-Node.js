const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
    // properties
    host: "localhost",
    user: "root",
    password: "",
    database: "sampleDB"
})

connection.connect(error => {
    if (!!error) {
        console.log("Error");
    } else {
        console.log("Connected");
    }
})

app.get("/", (req, res) => {
    connection.query("SELECT * FROM mySampleTable", (err, rows, fields) => {
        if(!!err){
            console.log("Error in the query");
        } else {
            console.log("Succesfull query");
            console.log(rows);
        }
    })
})

app.listen(3000);