var tripsController = require('./trips/tripsController');
var userController = require('./users/userController');

/* Utilities */
var sendResponse = function (res, err, data, status) {
    if (err) {
      res.status(400).send('Error: Record doesn\'t exist');
    } else {
      res.status(status).send(data);
    }
};

var createSession = function (req, res, newUser) {
  return req.session.regenerate(function () {
    req.session.user = newUser;
    res.redirect('/');
  });
};

var isLoggedIn = function (req){
  return req.session ? !!req.session.user : false;
};

var checkUser = function (req, res, next) {
  if (isLoggedIn(req)) {
    next();
  } else {
    res.redirect('/landingPage');
  }
};

module.exports = function (app) {

  /* Trip Routes */
  app.route('/api/trips', checkUser)
    .get(function (req, res) {
      tripsController.getAllTrips(function (err, data) {
        sendResponse(res, err, data, 200);
      });
    })
    .post(function (req, res) {
      tripsController.createTrip(req, function (err, data) {
        sendResponse(res, err, data, 201);
      });
    });

  app.route('/api/trips/:tripId', checkUser)
    .get(function (req, res) {
      tripsController.getTrip(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    })
    .put(function (req, res) {
      tripsController.updateTrip(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    });

  /* Task Routes */
  app.route('/api/tasks/add/:tripId', checkUser)
    .post(function (req, res){
      tripsController.addTask(req, function(err, data) {
        sendResponse(res, err, data, 201);
      });
    });

  app.route('/api/tasks/:tripId/:taskId', checkUser)
    .delete(function (req, res) {
      tripsController.removeTask(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    });
    //TODO: Add update task route here

  /* Task Assignment Routes */  
  app.route('/api/assign/:tripId', checkUser)
    .delete(function (req, res) {
      tripsController.assignTask(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    });

  app.route('/api/assign/:tripId/:memberId', checkUser)
    .delete(function (req, res) {
      tripsController.unassignTask(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    });

  /* User Routes & Authentication */
  app.route('/api/auth')
    .post(function (req, res) {
      userController.signIn(req, function (err, data) {
        if(err){
          sendResponse(res, err, null, null);
        }else{
          createSession(req, res, data);
        }
      });
    })
    .put(function (req, res) {
      userController.signUp(req, function (err, data) {
        if(err){
          sendResponse(res, err, null, null);
        }else{
          createSession(req, res, data);
        }
      });
    });

  /* OAuth Route */
  app.route('/callback')
    .get(function(req, res){
      if(req.query){
        //TODO: Create methods to store user data from req.query
        createSession(req, res, req.query);
      }
    });
};
