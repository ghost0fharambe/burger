var orm = require('../config/orm');

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (data) {
            cb(data);
        });
    },

    insertOne: function (burgerName, cb) {
        orm.insertOne(burgerName, function (data) {
            cb(data);
        });
    },

    updateOne: function (id, cb) {
        orm.updateOne(id, function (data) {
            cb(data);
        })
    }
};

module.exports = burger;