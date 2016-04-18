var User = require('./userModel');

module.exports = {
  createUser: function (body, next) {
    var userData = {
      // NOTE: this sets a unique 'id' property with google id
      // (Not '_id' which Mongo sets automatically)
      id: body.id,
      email: body.email,
      given_name: body.given_name,
      family_name: body.family_name,
    };

    // find or create user
    User.findOne({ id: body.id })
    .exec(function (err, user) {
      if (!user) {
        User.create(userData, function (err) {
          next(err, userData);
        });
      } else {
        next(err, user);
      }
    });
  },

  // add users trip._id to record for later lookup
  // this method is used in a couple methods on routes.js
  addTrip: function (userId, tripId, next) {
    User.update({ id: userId }, { $set: { trip:tripId } }, function () {
      next();
    });
  },
};
