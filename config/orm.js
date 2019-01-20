var connection = require('./connection');

//Object Relational Mapper

var orm = {
    selectAll: function (tableInput, cb) {
        var dbQuery = 'SELECT * FROM ??';
        connection.query(dbQuery, [tableInput], function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function (burgerName, cb) {
        var dbQuery = `INSERT INTO burgers (burger_name, devoured) VALUES (?, false);`
        connection.query(dbQuery, [burgerName], function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    updateOne: function (id, cb) {
        var dbQuery = 'UPDATE burgers SET devoured = true WHERE id = ?';
        connection.query(dbQuery, [id], function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    delete: function(id, cb) {
        var dbQuery = 'DELETE FROM burgers WHERE id = ?';
        connection.query(dbQuery, [id], function(err, data){
            if (err) throw err;
            cb(data);
        })
    }
};

module.exports = orm;