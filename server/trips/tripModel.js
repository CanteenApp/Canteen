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
  tasks:{
    type:Array,
    default:[{
      taskName:String,
      statusCode: {
        type: Number,
        default: 0
      },
      assignedTo: {
        type: Array,
        default: []
      },
      description: String,
      bullets: {
        type: Array,
        default: []
      },
      category: String
    }],
  },
});

module.exports = mongoose.model('Trip', tripSchema);
