var express = require('express');
var mongoose = require('mongoose');
var db = require('./server/db/config');
var middleware = require('./server/utils/middleware');

var app = express();


module.exports = app;
