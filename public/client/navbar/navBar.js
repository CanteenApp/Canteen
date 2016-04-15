angular.module('canteen.navBar', [
  'canteen.navHelper',
])

.controller('navBar', [
  '$scope',
  '$location',
  'navFactory',
  function ($scope, $location, navFactory) {
    $scope.location = $location.path();

    $scope.logOut = function () {
      navFactory.endSession();
    };
  },
]);
