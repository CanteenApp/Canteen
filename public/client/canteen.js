angular.module('canteen', [
  'canteen.landingPage',
  'ui.bootstrap',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
        .state('landingPage', {
      url: "/",
      templateUrl: "client/landingPage/landingPage.html",
      controller : 'landingPage'
    });
    // .state('tripForm', {
    //   url: "/tripForm",
    //   templateUrl: "public/client/trip-form/tripForm.html",
    //   controller : tripForm
    // });
    // .state('tripForm.lists', {
    //   url: "/lists",
    //   templateUrl: "public/client/trip-form/tripFormLists.html",
    //   controller: TBD
    // });
});
