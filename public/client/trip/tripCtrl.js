angular.module('canteen.trip', [])
.controller('tripCtrl', [
  '$scope',
  'trip',
  'NgMap',
  function ($scope, trip, NgMap) {
    trip.getTrip()
    .then(function (tripData) {
      $scope.trip = tripData;
      $scope.dates = {
        start: moment($scope.trip.dates.start).format('MMM Do, YYYY'),
        end: moment($scope.trip.dates.end).format('MMM Do, YYYY')
      };
    });

    $scope.color = {
      colors: ['red', 'blue', 'purple', 'green', 'orange'],
    };

    // NgMap.getMap().then(function (map) {
    // });

    // add call to get trip once factory method is available
  },
]);
