angular.module('canteen.listView', [])

.controller('listView', [
  '$scope',
  function($scope) {
    $scope.trip = {}
    $scope.list = $scope.trip.lists[0]; // make this dynamic depending on which list was 
                                        // clicked on. Use the listId for this.
 }
]);
