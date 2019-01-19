var express = require('express');

var router = express.Router();

var burger = require('../models/burger');

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.insertOne(req.body.burger_name, function (data) {
        res.json({
            id: data.insertId
        });
    });
});




module.exports = router;