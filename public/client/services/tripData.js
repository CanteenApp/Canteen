angular.module('canteen.tripData', [])

.factory('trip', ['$http',
  function ($http) {
    function getTrip(cb) {
      return $http({
        method: 'GET',
        url: '/api/trip',
      })
      .then(function (resp) {
        cb(resp.data);
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    function updateStatus(trip, cb) {
      return $http({
        method: 'PUT',
        url: '/api/trip/',
        data: trip,
      })
      .then(function (resp) {
        cb(resp.data);
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    return {
      getTrip: getTrip,
      updateStatus: updateStatus,
    };
  },
]);
