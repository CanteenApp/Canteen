var tripsController = require('./trips/tripsController');

module.exports = function (app, express) {
  app.get('/api/trips', function (req, res) {
    tripsController.getAllTrips(function (err, data) {
      if (err) {
        res.status(400).send('Error');
      } else {
        res.status(200).send(data);
      }
    });
  });

  app.get('/api/trips/:_id', function (req, res) {
    tripsController.getTrip(req, function (err, data) {
      if (err) {
        res.status(400).send('Record doesn\'t exist');
      } else {
        res.status(200).send(data);
      }
    });
  });

  app.post('/api/trips', function (req, res) {
    tripsController.createTrip(req, function (err, data) {
      if (err) {
        res.status(400).send('Unable to complete request');
      } else {
        res.status(201).send(data);
      }
    });
  });

  app.put('/api/trips/:_id', function (req, res) {
    tripsController.updateTrip(req, function (err, data) {
      if (err) {
        res.status(400).send('Record doesn\'t exist');
      } else {
        res.status(200).send(data);
      }
    });
  });
};
