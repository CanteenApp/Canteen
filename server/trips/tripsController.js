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
    Trip.findByIdAndUpdate(req.params._id, req.body, options)
    .exec(function (err, trip) {
      next(err, trip);
    });
  },

  getTrip: function (req, next) {
    Trip.findById(req.params._id)
    .exec(function (err, trip) {
      next(err, trip);
    });
  },
};
