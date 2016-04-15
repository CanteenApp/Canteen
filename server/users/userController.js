var User = require('./userModel');
var bcrypt = require('bcrypt');

module.exports = {
  // signIn: function (req, next) {
  //   User.find({username: req.body.username})
  //     .exec(function (err, user) {
  //       bcrypt.compare(req.body.password, user.password, function(err, res) {
  //         next(err, res);
  //       });
  //     });
  // },

  // signUp: function (req, next) {
  //   User.create(req.body, function (err, user) {
  //     next(err, user);
  //   });
  // },

  createUser: function(body, next) {
    userData = {
      id: body.id,
      email: body.email,
      given_name: body.given_name,
      family_name: body.family_name
    };
    User.findOne({id: body.id})
    .exec(function (err, user) {
      console.log(user);
      if (!user) {
        User.create(userData, function (err, result) {
          next(err, user);
        })
      }
      next(err, user);
    })
  },

  addTrip: function(userId, tripId, next) {
    User.update({id: userId}, {$set: {trip:tripId}}, function(){
      next();
    });
  }

};
