angular.module('canteen.tripData', [])

.factory('trip', [ '$http',
  function ($http) {
    function getTrip (cb) {
      return $http({
        method: 'GET',
        url: '/api/trip',
      })
      .then(function (resp) {
        console.log(resp.data);
        cb(resp.data);
      })
      .catch(function (err) {
        console.error(err);
      });
    }
    return {
      getTrip: getTrip,
      }
    }
]);
