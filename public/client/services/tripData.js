angular.module('canteen.tripData', [])

.factory('trip', [
  '$http',
  '$location',
  function ($http, $location) {
    function getTrip(cb) {
      return $http({
        method: 'GET',
        url: '/api/trip',
      })
      .then(function (resp) {
        if(!resp.data._id){
          $location.path('/#/landing-page');
          window.location.reload(true);
        }
        cb(resp.data);
      })
      .catch(function (err) {
        cb(err);
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
