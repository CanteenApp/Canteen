var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
  tripId: String,
  listName: String,
  tasks:{
    type:Array,
    default:[]
  }
});

module.exports = mongoose.model('List', listSchema);
