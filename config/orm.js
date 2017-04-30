var connection = require("connection.js");

exports = {
    selectAll: function selectAll(cb) {
        connection.query('SELECT * FROM burgers', function(error, results, fields) {
            if (error) console.log("selectAll failed");
            else console.log("selectAll worked");
            cb(error, results, fields);
        });
    },

    insertOne: function insertOne(burgerName, isDevoured) {
        connection.query("INSERT INTO burgers SET burger_name = ?, devoured = ?", [burgerName, isDevoured], function(error, results, fields) {
            if (error) console.log("Insert One failed to insert burgerName = " + burgerName);
            else console.log("Insert worked for burger " + burgerName);
        });
    },

    updateOne: function updateOne(id, burgerName, isDevoured) {
        connection.query("UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?", [burgerName, isDevoured, id], function(error, results, fields) {
            if (error) console.log("updateOne failed to update burgerName = " + burgerName);
            else console.log("Update worked for burger " + burgerName);
        });
    }
};
