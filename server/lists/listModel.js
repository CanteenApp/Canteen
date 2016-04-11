var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var listSchema = new Schema({
  listName: String,
  tasks:{
    type:Array,
    default:[]
  }
});

var List = mongoose.model('List', listSchema);

module.exports = List;
