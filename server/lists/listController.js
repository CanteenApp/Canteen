var List = require('./listModel.js');

module.exports = {
  getAllLists: function (req, next) {
    List.find({tripId: req.body.trip_id})
      .exec(function (err, lists) {
        next(err, lists);
      });
  },

  createList: function (req, next) {
    List.create(req.body, function (err, list) {
      next(err, list);
    });  
  },

  getList: function (req, next) {
    List.findById(req.params._id)
      .exec(function (err, list) {
        next(err, list);
      });
  },

  updateList: function (req, next) {
    var options = { new: true };
    List.findByIdAndUpdate(req.params._id, req.body, options)
      .exec(function (err, list) {
        next(err, list);
      });
  }
};
