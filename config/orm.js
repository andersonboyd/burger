var connection = require("../config/connection");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    createOne: function(table, column, value, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], function(err, result){
            if (err) throw err;
            cb(result);
        });
    } //,

    // updateOne: function(table, ){

    //}
};

module.exports = orm;