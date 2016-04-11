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
    console.log('params', req.params);
    var query = { _id: req.params.id };
    // var options = { new: true };
    Trip.update(query, req.body, function (err, trip) {
      if (err) {
        callback(err);
      } else {
        callback(null, trip);
      }
    });
  },

  getTrip: function (req, res) {
    var query = Trip.where({ _id: req.params.id });
    query.findOne(function (err, trip) {
      if (err) {
        return handleError(err);
      } else {
        res.json(trip);
      }
    });
  },
};
