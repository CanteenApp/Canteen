angular.module('canteen.listView', [])

.controller('listView', [
  '$scope',
  '$stateParams',
  function($scope, $stateParams) {
    $scope.trip = {};
    $scope.trip.lists.forEach(function (list) {
      if (list.listName === $stateParams.listName) {
        $scope.list = list;
      } 
    })
  }
]);
