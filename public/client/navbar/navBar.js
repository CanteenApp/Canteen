angular.module('canteen.navBar', [])

.controller('navBar', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.listName = '';
    $scope.location = $location.path();

    $scope.isOnLandingPage = function () {
      if ($location.path() === '/landing-page') {
        console.log('on LP');
        return true;
      } else {
        console.log('not on LP');
        return false;
      }
    };


    $scope.logOut = function () {
    //break session
    //redirect to landing page
    //route request to back end
    };
  //$scope.isOnLandingPage();
  },
]);
