/* User Documents Schema */
var mongoose = require('mongoose');

// TODO: add local authentication
// currently using only google for auth
var userSchema = mongoose.Schema({
  id: String,
  email: String,
  given_name: String,
  family_name: String,
  trip: String,
});

module.exports = mongoose.model('User', userSchema);
