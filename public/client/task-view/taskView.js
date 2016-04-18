angular.module('canteen.taskView', [])

.controller('taskView', [
  '$scope',
  'trip',
  function ($scope, trip) {
    $scope.updateStatus = function (task) {
      // Toggles status code between 0 and 1
      // and updates in db
      task.statusCode = task.statusCode ? 0 : 1;
      trip.updateStatus($scope.trip);
    };
  },
]);
