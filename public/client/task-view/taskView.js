angular.module('canteen.taskView', [])

.controller('taskView', [
  '$scope',
  'trip',
  function ($scope, trip) {
    $scope.updateStatus = function (task) {
      task.statusCode = task.statusCode ? 0 : 1;
      trip.updateStatus($scope.trip, function (result) {
        console.log('Status Updated!');
      });
    };
  },
]);
