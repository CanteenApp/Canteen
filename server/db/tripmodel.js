var mongoose = require('mongoose');
​
var Schema = mongoose.Schema;
​
var tripSchema = new Schema({
  tripName: String,
  members: {
    type: Array,
    default:[]
  },
  location: String,
  dates: String,
  lists:{
    type:Array,
    default:[]
  },
});
​
var Trip = mongoose.model('Trip', tripSchema);
​
module.exports = Trip;