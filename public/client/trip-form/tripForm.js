angular.module('canteen.tripForm', [
 'canteen.forms',
])

.controller('tripForm', [
  '$scope',
  'formFactory',
  '$location',
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
    $scope.members =  [];
    $scope.tripMember = {
      email: ''
    };

    $scope.addMember = function () {
      $scope.members.push($scope.tripMember);
      $scope.tripMember = {};
    };

    $scope.createTrip = function () {
      $scope.tripForm.members = $scope.members;
      formFactory.submitTrip($scope.tripForm, function(){
        window.location = '/#/trip';
      });
    };
  }
]);
