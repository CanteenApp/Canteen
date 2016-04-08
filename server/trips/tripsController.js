var Trip = require('./tripsController');
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

  createTrip: function (req, res) {
    Trip.create(req.body), function (err, trip) {
      if (err) {
        return handleError(err);
      } else {
        res.sendStatus(200);
      }
    };
  },

  // http://mongoosejs.com/docs/api.html
  // http://stackoverflow.com/questions/15123182/mongoose-findoneandupdate-not-working
  updateTrip: function (req, res) {
    var query = { _id: req.params.id };
    var options = { new: true };
    Trip.findOneAndUpdate(query, req.body, options, function (err, trip) {
      if (err) {
        console.log('got an error');
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
