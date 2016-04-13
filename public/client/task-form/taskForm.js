angular.module('canteen.taskForm', [
	'canteen.forms'
])

.controller('taskFormCtrl', [
	'$scope',
	'formFactory',
	function ($scope, formFactory) {
		$scope.taskForm = {
      listId = '',
      taskName = '',
      statusCode = 0,
      assignedTo = [],
      description = '',
      bullets = [],
    },
  };
  $scope.taskCategory = {
    category: '',
  };
  $scope.addCategory = function (category) {
    //TODO: add code here
  };
  $scope.createTask = function () {
    //TODO which function does this call to add a task? Do I need to create a formFactory to post a task?
  }
]);