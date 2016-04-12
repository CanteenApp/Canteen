var bodyParser = require('body-parser');
var session = require('express-session');
var Grant = require('grant-express');

var grant = new Grant(require('../.config/.grantConfig.json')[process.env.NODE_ENV || 'development']);

module.exports = function(app, express) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(session(require('../.config/.sessionSecret.json')));
  app.use(grant);
  app.use(express.static(__dirname + '/../../public'));
};
