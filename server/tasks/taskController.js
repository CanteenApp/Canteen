var List = require('./ListController');
var mongoose = require('mongoose');

module.exports = {
  getAllTasks: function (id, next) {
    List.find({listId: id})
      .then(function (tasks) {next(tasks);
      })
      .catch(function (err) {
        next(err);
      });
  },

  createTask: function (newTask, next) {
    List.create(newTask)
      .then(function (createdTask) {
        next(createdTask);
      })
      .catch(function (err) {
        next(err);
      });
  },

  getTask: function (id, next) {
    List.findOne({task_id: id})
      .then(function (task) {
        next(task);
      })
      .catch(function (err) {
        next(err);
      });
  },

  updateTask: function (id, updates, next) {
    List.update({task_id: id}, updates)
      .then(function (result) {
        next(result);
      })
      .catch(function (err) {
        next(err);
      });
  }
};
