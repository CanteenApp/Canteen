angular.module('canteen.listView', [])

.controller('listView', [
  '$scope',
  'trip',
  function($scope, trip) {
    $scope.trip = trip;
    $scope.color = {
      colors: ['red', 'blue','purple', 'green', 'orange']
    }
  }
]);
