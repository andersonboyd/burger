require("dotenv").config();
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_Password,
        database: "burgers_db"
    });
}


connection.connect(function(err){
    if(err){
        console.error("Couldn't connect; error: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;