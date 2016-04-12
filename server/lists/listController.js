var List = require('./listModel.js');
var mongoose = require('mongoose');

module.exports = {
  getAllLists: function (id, next) {
    List.find({tripId: id}, function (err, lists) {
        next(err, lists);
      });
  },

  createList: function (newList, next) {
    List.create(newList, function (err, list) {
        next(err, list);
      });  
  },

  getList: function (id, next) {
    List.findOne({list_id: id}, function (err, list) {
        next(err, list);
      });
  },

  updateList: function (id, updates, next) {
    List.update({list_id: id}, updates, function (err, list) {
        next(err, list);
      });
  }
};
