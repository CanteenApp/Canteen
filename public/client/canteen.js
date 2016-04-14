angular.module('canteen', [
  'canteen.landingPage',
  'canteen.tripForm',
  'canteen.tripData',
  'canteen.listView',
  'environment',
  'ui.bootstrap',
  'ui.router',
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/landing-page');
  $stateProvider
    .state('landingPage', {
      url: '/landing-page',
      templateUrl: 'client/landingPage/landingPage.html',
      controller: 'landingPage',
    })
    .state('tripForm', {
      url: '/trip-form',
      templateUrl: 'client/trip-form/tripForm.html',
      controller: 'tripForm'
    })
    .state('listView', {
      url: '/list/{listName}',
      templateUrl: 'client/list-view/listView.html',
      controller: 'listView',
    });
    // .state('tripForm.lists', {
    //   url: "/lists",
    //   templateUrl: "client/trip-form/tripFormLists.html",
    //   controller: TBD
    // });
})

.controller('indexControl', [
  '$scope',
  function ($scope) {
    $scope.listName = ''; // this will have to equal the name of the list that was clicked
  },
]);
