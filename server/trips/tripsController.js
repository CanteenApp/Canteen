var Trip = require('./tripModel');

module.exports = {
  getAllTrips: function (next) {
    Trip.find()
      .exec(function (err, trips) {
        next(err, trips);
      });
  },

  createTrip: function (req, next) {
    // Add current user to trip members
    req.body.members.push({ email: req.session.user.email });
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

  getTrip: function (tripId, next) {
    Trip.findOne({_id:tripId})
      .exec(function (err, trip) {
        next(err, trip);
      });
  },

  addTask: function (req, next) {
    console.log('req.params:' + req.params);
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

  // assignTask: function (req, next) {
  //   Trip.findByIdAndUpdate(req.params.tripId, {
  //     $push: {
  //       "assignedTo": req.body
  //     }
  //   },
  //   {
  //     safe: true,
  //     upsert: true
  //   })
  //     .exec(function (err, trip) {
  //       next(err, trip);
  //     });
  // },

  // unassignTask: function (req, next) {
  //   Trip.findByIdAndUpdate(req.params.tripId, {
  //     $pull: {
  //       "assignedTo": { _id: req.params.memberId }
  //     }
  //   })
  //     .exec(function (err, trip) {
  //       next(err, trip);
  //     });
  // },

  // update any task property
  updateTask: function (req, next) {
    //get tripID from session
    Trip.update(
      { id: req.params.tripId, tasks: { _id: req.body._id } },
      { $set: { 'tasks.$': req.body } }
    )
      .exec(function (err, trip) {
        next(err, trip);
      });    
  },

};
