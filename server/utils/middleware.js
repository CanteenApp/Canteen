var bodyParser = require('body-parser');
var session = require('express-session');
var Grant = require('grant-express');

/* New Grant For Google Authentication */
var grant = new Grant({
  server: {
    protocol: 'http',
    host: process.env.HOST || 'localhost:3333',
    callback: '/callback',
    transport: 'session',
    state: true,
  },
  google: {
    key: process.env.GOOGLE_CID || require('../.config/.secrets.json')['google']['clientId'],
    secret: process.env.GOOGLE_CSECRET || require('../.config/.secrets.json')['google']['clientSecret'],
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.me',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  },
});

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // specify session secret for new sessions
  app.use(session({
    secret: process.env.SESSION_SECRET || require('../.config/.secrets.json')['session']['secret']
  }));
  app.use(grant);
  app.use(express.static(__dirname + '/../../public'));
};
