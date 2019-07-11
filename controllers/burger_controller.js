var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var handler = {burgers: data};
        console.log(handler);
        res.render("index", handler);
    })
});

router.post("/api/burgers", function(req, res){
    burger.createOne("kind", [req.body.kind], function(result){
        res.json({id: result.insertId});
    });
});

// INSERT ROUTER.PUT FUNCTION HERE

module.exports = router;