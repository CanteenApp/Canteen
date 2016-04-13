angular.module('canteen.forms', [])

.factory('formFactory', [
  '$http',
  function ($http) {
    function submitTrip(tripData) {
      return $http({
        method: 'POST',
        url: '/api/createTrip',
        data: tripData
      })
      .then(function(tripData) {
        return tripData;
      })
      .catch(function(err) {
        console.error(err);
      });
    }

    return {
      submitTrip: submitTrip
    };
  },
]);
