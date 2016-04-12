var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = new Schema({
  listId: String,
  taskName: String,
  statusCode: {
    type: Number,
    default: 0
  },
  assignedTo:{
    type:Array,
    default:[]
  },
  description: String, 
  bullets:{
    type:Array,
    default:[]
  }
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
