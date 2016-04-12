var Task = require('./taskModel.js');
var mongoose = require('mongoose');

module.exports = {
  getAllTasks: function (id, next) {
    Task.find({listId: id})
      .exec(function (err, tasks) {
        next(err, tasks);
      });
  },

  createTask: function (newTask, next) {
    Task.create(newTask)
      .exec(function (err, task) {
        next(err, task);
    });
  },

  getTask: function (id, next) {
    Task.findOne({task_id: id})
      .exec(function (err, task) {
        next(err, task);
      });
  },

  updateTask: function (id, updates, next) {
    Task.update({task_id: id}, {$set: updates})
      .exec(function (err, task) {
        next(err, task);
      });
  }
};
