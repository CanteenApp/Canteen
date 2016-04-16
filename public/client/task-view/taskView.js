angular.module('canteen.taskView', [])

.controller('taskView', [
  '$scope',
  'trip',
  function ($scope) {
    $scope.updateStatus = function () {
      // add factory method
      console.log('clicked');
    };
  },
]);
