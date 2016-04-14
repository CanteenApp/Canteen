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
      category: [],
    };
    $scope.taskBullet = {
      item: ''
    };
    $scope.taskCategory = {
      category: ''
    };
    $scope.addBullet = function () {
      $scope.taskForm.bullets.push($scope.taskBullet);
    };
    $scope.addCategory = function () {
      $scope.tripForm.category.push($scope.taskCategory);
      $scope.taskCategory = {};
    };
    $scope.createTask = function (taskForm, tripId) {
      formFactory.submitTask($scope.taskForm);
    };
  }
]);
