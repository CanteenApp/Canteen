// tripsController path may change
var tripsController = require('./trips/tripsController');

// trips methods may change
module.exports = function (app, express) {
  app.get('/api/trips', tripsController.getAllTrips);
  app.get('/api/trips/:_id', function (req, res) {
    tripsController.getTrip(req, function (err, data) {
      if (err) {
        res.handleError(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

  app.post('/api/trips', function (req, res) {
    tripsController.createTrip(req, function (err, data) {
      if (err) {
        res.handleError(err);
      } else {
        res.status(201).send(data);
      }
    });
  });

  app.put('/api/trips/:_id', function (req, res) {
    tripsController.updateTrip(req, function (err, data) {
      if (err) {
        res.handleError(err);
      } else {
        res.status(200).send(data);
      }
    });
  });
};
