angular.module('canteen.trip', [])
.controller('tripCtrl', [
  '$scope',
  'trip',
  function ($scope, trip) {
    $scope.trip = trip;

    // add call to get trip once factory method is available
  },
]);
