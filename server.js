var express = require('express');
var mongoose = require('mongoose');
var db = require('./server/db/config.js');

var app = express();

require('./server/utils/middleware.js')(app, express);

module.exports = app;
