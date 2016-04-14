var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  username: {
    type: String, 
    index: {unique:true}
  },
  password: String,
});

userSchema.pre('save', function (next) {
  return bcrypt.hash(this.password, 5, function(err, hash) {
    this.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', userSchema);
