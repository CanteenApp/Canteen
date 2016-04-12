var mongoose = require('mongoose');
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/canteen-test-db';
var db;

mongoose.connect(mongoURI);
db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;
