angular.module('canteen.navBar', [])

.controller('navBar', [
  '$scope',
  '$location',
  'navHelper',
  function ($scope, $location) {
    $scope.location = $location.path();

    $scope.logOut = function () {
      navFactory.endSession();
    //break session
    //redirect to landing page
    //route request to back end
    };
  },
]);
