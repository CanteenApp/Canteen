angular.module('canteen.tripForm', [
 'canteen.forms',
])

// .controller('tripFormCtrl', [
//   '$scope',
//   'formFactory',
//   function ($scope, formFactory) {
//     $scope.tripForm = {
//     tripName: '',
//     members: [],
//     location: '',
//     dates: {
//       start: '',
//       end: ''
//     }
//   };
//   $scope.tripMember = {
//     email: ''
//   };
//   $scope.addMember = function() {
//     $scope.tripFrom.members.push($scope.tripMember);
//     $scope.tripMember = {};
//   };
//   $scope.createTrip = function() {
//     formFactory.submitTrip($scope.tripForm);
//   };
// }]);
.controller('tripFormCtrl', ['$scope', 'formFactory', tripFormCtrl]);

function tripFormCtrl($scope, formFactory) {
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
    email: '',
  };

  $scope.addMember = function () {
    $scope.tripFrom.members.push($scope.tripMember);
    $scope.tripMember = {};
  };

  $scope.createTrip = function () {
    formFactory.submitTrip($scope.tripForm);
  };
};
