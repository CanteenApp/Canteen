var Task = require('./taskModel');

module.exports = {
  getAllTasks: function (req, next) {
    Task.find({tripName: req.params._trip})
      .exec(function (err, tasks) {
        next(err, tasks);
      });
  },

  createTask: function (req, next) {
    Task.create(req.body, function (err, task) {
      next(err, task);
    });
  },

  getTask: function (req, next) {
    Task.findById(req.params._id)
      .exec(function (err, task) {
        next(err, task);
      });
  },

  updateTask: function (req, next) {
    var options = { new: true };
    Task.findByIdAndUpdate(req.params._id, req.body, options)
      .exec(function (err, task) {
        next(err, task);
      });
  }
};
