angular.module('canteen.landingPage', [])

.controller('landingPage', [
  '$scope',
  function ($scope) {
    // Set up dynamic environment link for signin
    if (window.location.host === 'localhost:3333') {
      $scope.googleUrl = 'http://localhost:3333/connect/google';
    } else {
      $scope.googleUrl = 'https://canteenapp.herokuapp.com/connect/google';
    }
  },
]);
