/* Database Configuration */
var mongoose = require('mongoose');
var db;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/canteen-test-db');

db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;
