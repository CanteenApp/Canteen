angular.module('canteen.taskForm', [])

//grab tripId from parent controller
.controller('taskForm', [
  '$scope',
  'formFactory',
  'trip',
  function ($scope, formFactory, trip) {
    $scope.taskForm = {
      statusCode: 0
    };
    $scope.bullets = [];
    $scope.task = {
      bullet: ''
    }

    $scope.addBullet = function () {
      // Add bullet and reset field
      $scope.bullets.push($scope.task.bullet);
      $scope.task = {};
    };

    $scope.createTask = function () {
      // Submit task, reset fields, and refresh trip
      $scope.taskForm.bullets = $scope.bullets;
      formFactory.submitTask($scope.taskForm, $scope.trip._id);
      $scope.taskForm = {
        statusCode: 0
      };
      $scope.bullets = [];

      trip.getTrip()
      .then(function (trip) {
        $scope.$parent.trip = trip;
      })
    };
  },
]);
