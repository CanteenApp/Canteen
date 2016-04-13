var Trip = require('./tripModel');

module.exports = {
  getAllTrips: function (next) {
    Trip.find()
      .exec(function (err, trips) {
        next(err, trips);
      });
  },

  createTrip: function (req, next) {
    Trip.create(req.body, function (err, trip) {
      next(err, trip);
    });
  },

  updateTrip: function (req, next) {
    var options = { new: true };
    Trip.findByIdAndUpdate(req.params.tripId, req.body, options)
      .exec(function (err, trip) {
        next(err, trip);
      });
  },

  getTrip: function (req, next) {
    Trip.findById(req.params.tripId)
      .exec(function (err, trip) {
        next(err, trip);
      });
  },

  addTask: function (req, next) {
    Trip.findByIdAndUpdate(req.params.tripId, {
      $push: {
        "tasks": req.body
      }
    },
    {
      safe: true,
      upsert: true
    })
      .exec(function (err, trip) {
        next(err, trip);
      });
  },

  removeTask: function (req, next) {
    Trip.findByIdAndUpdate(req.params.tripId, {
      $pull: {
        "tasks": { _id: req.params.taskId }
      }
    })
      .exec(function (err, trip) {
        next(err, trip);
      });
  },

  //TODO: Create ability to update tasks
  // updateTask: function (req, next) {
  // },

  assignTask: function (req, next) {
    Trip.findByIdAndUpdate(req.params.tripId, {
      $push: {
        "assignedTo": req.body
      }
    },
    {
      safe: true,
      upsert: true
    })
      .exec(function (err, trip) {
        next(err, trip);
      });
  },

  unassignTask: function (req, next) {
    Trip.findByIdAndUpdate(req.params.tripId, {
      $pull: {
        "assignedTo": { _id: req.params.memberId }
      }
    })
      .exec(function (err, trip) {
        next(err, trip);
      });
  }
};
