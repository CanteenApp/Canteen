var bodyParser = require('body-parser');
var session = require('exress-session');
var Grant = require('grant-express');

var grant = new Grant(require('../.config/.grantConfig.js'));

module.exports = function(app, express) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(session(require('../.config/.sessionSecret.json')))
  app.use(grant);
  app.use(express.static(__dirname + '/../../public'));
};
