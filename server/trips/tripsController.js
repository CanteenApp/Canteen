var Trip = require('./tripModel');
var mongoose = require('mongoose');

module.exports = {
  getAllTrips: function (req, res, next) {
    Trip.find()
    .then(function (trips) {
      res.json(trips);
    })
    .catch(function (err) {
      next(err);
    });
  },

  createTrip: function (req, callback) {
    Trip.create(req.body, function (err, trip) {
      if (err) {
        callback(err);
      } else {
        callback(null, trip);
      }
    });
  },

  // http://mongoosejs.com/docs/api.html
  // http://stackoverflow.com/questions/15123182/mongoose-findoneandupdate-not-working
  updateTrip: function (req, callback) {
    var options = { new: true };
    Trip.findByIdAndUpdate(req.params._id, req.body, options, function (err, trip) {
      if (err) {
        callback(err);
      } else {
        callback(null, trip);
      }
    });
  },

  getTrip: function (req, callback) {
    Trip.findById(req.params._id, function (err, trip) {
      if (err) {
        callback(err);
      } else {
        callback(null, trip);
      }
    });
  },
};
