var mongoose = require('mongoose');

var tripSchema = new mongoose.Schema({
  tripName: String,
  members: {
    type: Array,
    default:[],
  },
  location: String,
  dates: {
    start: Date,
    end: Date,
  },
  lists:{
    type:Array,
    default:[],
  },
});

module.exports = mongoose.model('Trip', tripSchema);
