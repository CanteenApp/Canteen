angular.module('canteen.common', [])

.factory('commonFactory', [
  '$http',
  function ($http) {
    function getTrip(tripId) {
      // return $http({
      //   method: 'GET',
      //   url: '/api/trips/' + tripId,
      // })
      // .then(function (tripData) {
      //   console.log(tripData);
      //   return tripData;
      // })
      // .catch(function (err) {
      //   console.error(err);
      // });
      return {
        tripName: 'Dirty Bird Campout',
        members: [''],
        location: ''
      }
    }

    return {
      getTrip: getTrip,
    };
  },
]);

// var tripSchema = new mongoose.Schema({
//   tripName: String,
//   members: {
//     type: Array,
//     default:[],
//   },
//   location: String,
//   dates: {
//     start: Date,
//     end: Date,
//   },
//   tasks:{
//     type:Array,
//     default:[{
//       taskName:String,
//       statusCode: {
//         type: Number,
//         default: 0
//       },
//       assignedTo: {
//         type: Array,
//         default: []
//       },
//       description: String,
//       bullets: {
//         type: Array,
//         default: []
//       },
//       category: String
//     }],
//   },
// });
