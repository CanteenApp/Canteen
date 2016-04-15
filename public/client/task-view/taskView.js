angular.module('canteen.taskView', [])

.controller('taskView', [
  '$scope',
  'trip',
  function($scope, trip) {
    $scope.trip = trip;
    $scope.color = {
      colors: ['red', 'blue','purple', 'green', 'orange']
    }
  }
]);
