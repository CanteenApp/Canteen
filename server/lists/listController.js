var List = require('./ListController');
var mongoose = require('mongoose');

module.exports = {
  getAllLists: function (id, next) {
    List.find({tripId: id})
      .then(function (trips) {next(trips);
      })
      .catch(function (err) {
        next(err);
      });
  },

  createList: function (newList, next) {
    List.create(newList)
      .then(function (createdList) {
        next(createdList);
      })
      .catch(function (err) {
        next(err);
      });
  },

  getList: function (id, next) {
    List.findOne(id)
      .then(function (list) {
        next(list);
      })
      .catch(function (err) {
        next(err);
      });
  },

  updateList: function (id, updates, next) {
    List.update({tripId: id}, updates)
      .then(function (list) {
        next(list);
      })
      .catch(function (err) {
        next(err);
      });
  }
};
