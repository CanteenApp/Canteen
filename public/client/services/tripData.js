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
    function updateStatus(task, cb) {
      return $http({
        method: 'PUT',
        url: '/api/updateStatus',
        data: task,
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
