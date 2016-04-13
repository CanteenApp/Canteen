var tripsController = require('./trips/tripsController');
var taskController = require('./tasks/taskController');
var userController = require('./users/userController');

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
  //trip routes
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

  app.route('/api/trips/:_id', checkUser)
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
 
    //tasks routes
    app.route('/api/tasks', checkUser)
      .get(function (req, res) {
        taskController.getTrip(req, function (err, data) {
          sendResponse(res, err, data, 200);
        });
      })
      .post(function (req, res) {
        taskController.updateTrip(req, function (err, data) {
          sendResponse(res, err, data, 201);
        });
      });

    app.route('/api/tasks/:_id', checkUser)
      .get(function (req, res) {
        taskController.getTrip(req, function (err, data) {
          sendResponse(res, err, data, 200);
        });
      })
      .put(function (req, res) {
        taskController.updateTrip(req, function (err, data) {
          sendResponse(res, err, data, 200);
        });
      });
      //user routes & authentication

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
      //handle successful OAuth calls
      app.route('/callback')
        .get(function(req, res){
          if(req.query){
            //TODO: Create methods to store user data from req.query
            createSession(req, res, req.query);
          }
        });
};
