angular.module('canteen.landingPage', [])
.controller('landingPage', [
  '$scope',
  'envService',
  function ($scope, envService) {
    $scope.data = {};

    if (envService.is('production')) {
      $scope.googleUrl = 'https://canteenapp.herokuapp.com/connect/google';
    } else {
      $scope.googleUrl = 'http://localhost:3333/connect/google';
    }
  },
]);
