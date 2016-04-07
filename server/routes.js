// tripsController path may change
var tripsController = require('../trips/tripsController.js');

// trips methods may change
module.exports = function (app, express) {
  app.get('/api/trips/:tripId', tripsController.getTrip);
  app.post('api/trips/', tripsController.newTrip);
};
