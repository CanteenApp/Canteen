angular.module('canteen.tripForm', [
 'canteen.forms',
])

.controller('tripForm', [
  '$scope',
  'formFactory',
  function ($scope, formFactory) {
    $scope.tripForm = {
      tripName: '',
      members: [],
      location: '',
      dates: {
        start: '',
        end: '',
      },
    };
    $scope.tripMember = {
      email: ''
    };
    $scope.addMember = function() {
      $scope.tripForm.members.push($scope.tripMember);
      $scope.tripMember = {};
    };
    $scope.createTrip = function() {
      formFactory.submitTrip($scope.tripForm);
    };
  }
]);
