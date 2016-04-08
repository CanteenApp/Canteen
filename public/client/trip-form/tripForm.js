angular.module('canteen.tripForm', [])

.controller('tripFormData', ['$scope', function($scope) {
    $scope.tripForm = {
    tripName: '',
    members: [],
    location: '',
    dates: {
      start: '',
      end: ''
  };
  $scope.tripMember = {
    email: ''
  };
  $scope.addMember = function() {};
  $scope.createTrip = function() {};
  };
}])