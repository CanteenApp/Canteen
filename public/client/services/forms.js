angular.module('canteen.forms', [])

.factory('formFactory', [
  '$http',
  function ($http) {
    function submitTrip(tripData, cb) {
      return $http({
        method: 'POST',
        url: '/api/trips',
        data: tripData,
      })
      .then(function () {
        cb();
      });
    }

    function submitTask(taskData, tripId) {
      return $http({
        method: 'POST',
        url: '/api/tasks/add/' + tripId,
        data: taskData,
      })
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    return {
      submitTrip: submitTrip,
      submitTask: submitTask,
    };
  },
]);
