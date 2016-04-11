// tripsController path may change
var tripsController = require('./trips/tripsController');

// trips methods may change
module.exports = function (app, express) {
  app.get('/api/trips', tripsController.getAllTrips);
  app.get('/api/trips/:tripId', tripsController.getTrip);
  app.post('/api/trips', tripsController.createTrip);
};
