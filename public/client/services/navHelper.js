angular.model('canteen.navHelper', [])

.factory('navFactory', [
  '$http',
  function($http) {
    function endSession () {
      return $http({
        method: 'POST',
        url: 'api/endsession'
      })
      .then(function (resp) {
        return resp;
      })
      .cath(function (err) {
        console.error(err);
      });
    }

    return {
      endSession: endSession,
    };
  },
]);
