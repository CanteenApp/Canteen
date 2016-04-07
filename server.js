var express = require('express');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/canteen-test-db');

var app = express();

module.exports = app;
