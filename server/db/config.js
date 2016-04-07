var mongoose = require('mongoose');

mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/canteen-test-db';
mongoose.connect(mongoURI);

var db = mongoose.connect;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;