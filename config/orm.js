var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    createOne: function(table, column, value, cb){
        var queryString = "INSERT INTO "+ table +" ("+column.toString()+") VALUES (?)";
        connection.query(queryString, value, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table, colVal, condition, cb){
        var queryString = "UPDATE " + table;
        queryString += " SET " + objToSql(colVal);
        queryString += " WHERE " + condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;