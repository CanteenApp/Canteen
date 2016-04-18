angular.module('canteen.navBar', [])

.controller('navBar', [
  '$scope',
  '$location',
  'navFactory',
  function ($scope, $location, navFactory) {
    $scope.location = $location.path();

    $scope.logOut = function () {
      // After session has been destroyed, redirect to landing page
      // and refresh page to ensure 'logout' option in navbar disappears
      navFactory.endSession();
      $location.path('/#/landing-page');
      window.location.reload(true);
    };
  },
]);
