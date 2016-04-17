angular.module('canteen.taskView', [])

.controller('taskView', [
  '$scope',
  'trip',
  function ($scope, trip) {
    $scope.updateStatus = function (task) {
      task.statusCode = task.statusCode ? 0 : 1;
      trip.updateStatus(task, function (result) {
        console.log(result);
      });
      
    };
  },
]);
