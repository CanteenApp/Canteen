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
      //after session has been destroyed, redirect to landing page
      $location.path('/#/landing-page');
      //refresh landing page to ensure 'logout' option in navbar disappears
      window.location.reload(true);
    };
  },
]);
