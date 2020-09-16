// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // Create a new burger.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
//   allDevoured: function(condition, cb) {
//     orm.allDevoured("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
