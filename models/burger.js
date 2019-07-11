var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    createOne: function(column, value, cb){
        orm.createOne("burgers", column, value, function(res){
            cb(res);
        });
    }//,
    //updateOne: function(){

    //}
};

module.exports = burger;