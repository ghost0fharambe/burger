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
        return res.status(200).end();
    });
});

router.put('/api/burgers/:id', function (req, res) {
    //var condition = 'id = ' + req.params.id;
    burger.updateOne(req.body.id, function (data) {
        if (data.changedRows === 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    });
});


module.exports = router;