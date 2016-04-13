var User = require('./userModel');
var bcrypt = require('bcrypt');

module.exports = {
  signIn: function (req, next) {
    User.find({username: req.body.username})
      .exec(function (err, user) {
        bcrypt.compare(req.body.password, user.password, function(err, res) {
          next(err, res);
        });
      });
  },

  signUp: function (req, next) {
    User.create(req.body, function (err, user) {
      next(err, user);
    });
  }
};
