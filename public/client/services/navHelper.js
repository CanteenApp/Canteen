angular.module('canteen.navHelper', [])

.factory('navFactory', [
  '$http',
  function($http) {
    function endSession () {
      return $http({
        method: 'GET',
        url: '/logout'
      })
      .then(function (resp) {
        return resp;
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    return {
      endSession: endSession,
    };
  },
]);
