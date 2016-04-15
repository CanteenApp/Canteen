angular.module('canteen.taskForm', [
	'canteen.forms',
])

//grab tripId from parent controller
.controller('taskForm', [
	'$scope',
	'formFactory',
	function ($scope, formFactory) {
		$scope.taskForm = {};
		$scope.bullets = [];

		//TODO: grab trip id from trip
		// $scope.tripId = number;
		// $scope.taskBullet = '';

		$scope.addBullet = function (bullet) {
			$scope.bullets.push(bullet);
			// $scope.taskBullet = '';
			// taskBullet.$setPristine()
			// taskBullet.$setUntouched();
		};

		// $scope.addCategory = function () {
		//   $scope.taskForm.category = $scope.chooseCategory;
		//   $scope.chooseCategory = '';
		// };

		// $scope.addAssignedTo = function () {
		//   $scope.taskForm.assignedTo.push($scope.assignee);
		//   $scope.assignee = '';
		// }

		$scope.createTask = function () {
			$scope.taskForm.bullets = $scope.bullets;
			console.log($scope.taskForm);
			formFactory.submitTask($scope.taskForm, $scope.trip._id);
			$scope.taskForm = {};
		};
	},
]);
