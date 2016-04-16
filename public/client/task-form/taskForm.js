angular.module('canteen.taskForm', [
  'canteen.forms',
  'canteen.tripData',
])

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

    //TODO: grab trip id from trip
    // $scope.tripId = number;
    // $scope.taskBullet = '';

    $scope.addBullet = function () {
      $scope.bullets.push($scope.task.bullet);
      $scope.task = {};
      // $scope.taskBullet = '';
      // taskBullet.$setPristine()
      // taskBullet.$setUntouched();
    };

    // $scope.addCategory = function () {
    //   $scope.taskForm.category = $scope.chooseCategory;
    //   $scope.chooseCategory = '';
    // };

    // $scope.addAssignedTo = function () {
    //   $scope.taskForm.assignedTo.push($scope.assignee);
    //   $scope.assignee = '';
    // }

    $scope.createTask = function () {
      $scope.taskForm.bullets = $scope.bullets;
      console.log($scope.taskForm);
      formFactory.submitTask($scope.taskForm, $scope.trip._id);
      $scope.taskForm = {};
      $scope.bullets = [];
      trip.getTrip(function (trip) {
        $scope.$parent.trip = trip;
      })
    };
  },
]);
