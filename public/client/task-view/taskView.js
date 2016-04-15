angular.module('canteen.taskView', [])

.controller('taskView', [
  '$scope',
  'trip',
  function ($scope, trip) {
    $scope.trip = trip;
    $scope.updateStatus = function () {
      // add factory method
      console.log('clicked');
    };
  },
]);
