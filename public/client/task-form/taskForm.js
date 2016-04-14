angular.module('canteen.taskForm', [
	'canteen.forms'
])
//grab tripId from parent controller

.controller('taskForm', [
	'$scope',
	'formFactory',
  function ($scope, formFactory) {
    $scope.taskForm = {
      taskName: '',
      statusCode: 0,
      assignedTo: [],
      description: '',
      bullets: [],
      category: '',
    };

    $scope.assignee = '';
    $scope.taskBullet = '';
    $scope.chooseCategory = '';
    //TODO: grab trip id from trip
    // $scope.tripId = number;

    $scope.addBullet = function () {
      $scope.taskForm.bullets.push($scope.taskBullet);
      $scope.taskBullet = '';
    };
    $scope.addCategory = function () {
      $scope.taskForm.category = $scope.chooseCategory;
      $scope.chooseCategory = '';
    };
    $scope.addAssignedTo = function () {
      $scope.taskForm.assignedTo.push($scope.assignee);
      $scope.assignee = '';
    }
    $scope.createTask = function () {
      formFactory.submitTask($scope.taskForm, $scope.tripId);
    };
  }
]);
