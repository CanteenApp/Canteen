angular.module('canteen.trip', [])
.controller('tripCtrl', [
  '$scope',
  'trip',
  'NgMap',
  function ($scope, trip, NgMap) {
    $scope.trip = trip;

    // NgMap.getMap().then(function (map) {
    // });

    // add call to get trip once factory method is available
  },
]);
