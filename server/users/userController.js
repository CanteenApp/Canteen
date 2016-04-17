var User = require('./userModel');
// var bcrypt = require('bcrypt');

module.exports = {
  createUser: function (body, next) {
    userData = {
      id: body.id,
      email: body.email,
      given_name: body.given_name,
      family_name: body.family_name,
    };

    // check for user record or create one
    User.findOne({ id: body.id })
    .exec(function (err, user) {
      console.log(user);
      if (!user) {
        User.create(userData, function (err, result) {
          next(err, userData);
        });
      } else {
        next(err, user);
      }
    });
  },

  // add users trip._id to record
  // this method is used in a couple methods on routes.js
  addTrip: function (userId, tripId, next) {
    User.update({ id: userId }, { $set: { trip:tripId } }, function () {
      next();
    });
  },
};
