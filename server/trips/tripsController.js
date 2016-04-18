var Trip = require('./tripModel');

module.exports = {

  // search current trip table for
  // email address on members object
  searchTripsForUser: function (email, next) {
    Trip.findOne({ 'members.email': email })
    .exec(function (err, trip) {
      next(err, trip);
    });
  },

  // create a trip
  createTrip: function (req, next) {
    // Add current user to trip members
    req.body.members.push({ email: req.session.user.email });
    Trip.create(req.body, function (err, trip) {
      next(err, trip);
    });
  },

  // update trip
  updateTrip: function (req, next) {
    var options = { new: true };
    Trip.findByIdAndUpdate(req.body._id, req.body, options)
      .exec(function (err, trip) {
        next(err, trip);
      });
  },

  // get trip by ID
  getTrip: function (tripId, next) {
    Trip.findOne({ _id:tripId })
      .exec(function (err, trip) {
        next(err, trip);
      });
  },

  // create a task on trips object
  addTask: function (req, next) {
    Trip.findByIdAndUpdate(req.params.tripId, {
      $push: {
        tasks: req.body,
      },
    },
    {
      safe: true,
      upsert: true,
    })
    .exec(function (err, trip) {
      next(err, trip);
    });
  },

};
