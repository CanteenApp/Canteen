var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// TODO: add password to user
// currently using only google for auth
var userSchema = mongoose.Schema({
  id: String,
  email: String,
  given_name: String,
  family_name: String,
  trip: String,
});

module.exports = mongoose.model('User', userSchema);
