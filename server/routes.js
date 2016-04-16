var tripsController = require('./trips/tripsController');
var userController = require('./users/userController');
var Purest = require('purest');

var google = new Purest({provider: 'google'});

/* Utilities */
var sendResponse = function (res, err, data, status) {
    if (err) {
      res.status(400).send('Error: Record doesn\'t exist');
    } else {
      res.status(status).send(data);
    }
};

// var createSession = function (req, res, newUser) {
//   return req.session.regenerate(function () {
//     req.session.user = newUser;
//     res.redirect('/');
//   });
// };

var isLoggedIn = function (req){
  return req.session ? !!req.session.user : false;
};

var checkUser = function (req, res, next) {
  if (isLoggedIn(req)) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = function (app) {

  /* Trip Routes */
  app.route('/api/trips')
    .get(checkUser, function (req, res) {
      tripsController.getAllTrips(function (err, data) {
        sendResponse(res, err, data, 200);
      });
    })
    .post(checkUser, function (req, res) {
      tripsController.createTrip(req, function (err, data) {
        req.session.user.trip = data._id;
        userController.addTrip(req.session.user.id, data._id, function(err, result){
          sendResponse(res, err, data, 201);
        });
      });
    });

  app.route('/api/trip/', checkUser)
    .get(checkUser, function (req, res) {
      tripsController.getTrip(req.session.user.trip, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    })
    .put(checkUser, function (req, res) {
      tripsController.updateTrip(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    });

  /* Task Routes */
  app.route('/api/tasks/add/:tripId')
    .post(checkUser, function (req, res){
      tripsController.addTask(req, function(err, data) {
        sendResponse(res, err, data, 201);
      });
    });

  app.route('/api/tasks/:tripId/:taskId', checkUser)
    .delete(checkUser, function (req, res) {
      tripsController.removeTask(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    });
    //TODO: Add update task route here

  /* Task Assignment Routes */
  app.route('/api/assign/:tripId', checkUser)
    .delete(checkUser, function (req, res) {
      tripsController.assignTask(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    });

  app.route('/api/assign/:tripId/:memberId', checkUser)
    .delete(checkUser, function (req, res) {
      tripsController.unassignTask(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    });

  /* User Routes & Authentication */
  // app.route('/api/auth')
  //   .post(function (req, res) {
  //     userController.signIn(req, function (err, data) {
  //       if(err){
  //         sendResponse(res, err, null, null);
  //       }else{
  //         createSession(req, res, data);
  //       }
  //     });
  //   })
  //   .put(function (req, res) {
  //     userController.signUp(req, function (err, data) {
  //       if(err){
  //         sendResponse(res, err, null, null);
  //       }else{
  //         createSession(req, res, data);
  //       }
  //     });
  //   });

  /* OAuth Route */
  app.route('/callback')
    .get(function(req, res){
      google.get('https://www.googleapis.com/oauth2/v2/userinfo?alt=json', {
        auth: {bearer: req.session.grant.response.access_token}
      }, function (err, nope, body) {
        userController.createUser(body, function(err, user) {
          req.session.user = user;
          if (!user.trip) {
            res.redirect('/#/trip-form');
          } else {
            res.redirect('/#/trip');
          }
        });
      })
    });

  app.route('/logout')
    .get(function (req, res) {
      req.session.destroy(function (err) {
        if(err) {
          console.error(err);
        } else {
          res.redirect('/');
        }
      });
    });
};
