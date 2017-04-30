//import orm.js
var orm = require("../config/orm.js");
//call the ORM functions using burger specific input for the ORM
module.exports = {
    all: function(cb) {
        orm.selectAll(cb);
    },
    create: function(burgerNameArray) {
        orm.insertOne()
    }
};
//export 