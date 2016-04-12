var tripsController = require('./trips/tripsController');
var listController = require('./lists/listController');
var taskController = require('./tasks/taskController');

var sendResponse = function (res, err, data, status) {
    if (err) {
      res.status(400).send('Error: Record doesn\'t exist');
    } else {
      res.status(status).send(data);
    }
};

module.exports = function (app, express) {
  //trip routes
  app.route('/api/trips')
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

  app.route('/api/trips/:_id')
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
  //list routes
  app.route('/api/lists')
    .get(function (req, res) {
      listController.getAllLists(req, function (err, data) {
        sendResponse(res, err, data, 200);
      });
    })
    .post(function (req, res) {
      listController.createList(req, function (err, data) {
        sendResponse(res, err, data, 201);
      });
    });

    app.route('/api/lists/:_id')
      .get(function (req, res) {
        listController.getList(req, function (err, data) {
          sendResponse(res, err, data, 200);
        });
      })
      .put(function (req, res) {
        listController.updateList(req, function (err, data) {
          sendResponse(res, err, data, 200);
        });
      });
    //tasks routes
    app.route('/api/tasks')
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

    app.route('/api/tasks/:_id')
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
    //TODO:Add User routes
};
