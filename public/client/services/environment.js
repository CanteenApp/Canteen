angular.module('canteen', ['environment'])

.config(function (envServiceProvider) {
  // https://github.com/juanpablob/angular-environment
  envServiceProvider.config({
    domains: {
      development: ['localhost'],
      production: ['canteenapp.herokuapp.com'],
    },
  });

  envServiceProvider.check();
});
