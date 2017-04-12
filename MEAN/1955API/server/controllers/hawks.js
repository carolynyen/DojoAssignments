var mongoose = require('mongoose');
var Name = mongoose.model('Names');

module.exports = {
  show: function(req, res) {
      Name.find({}, function(err, names) {
          if(err) {
              console.log(err);
          }
          else {
              res.json(names);
          }
     })
  },
  addnew: function(req, res) {
      var name = new Name({name: req.params.name});
      console.log(req.params);
      name.save(function(err) {
          if(err) {
              console.log('something went wrong');
          }
          else {
              res.redirect('/');
          }
      })
  },
  removeone: function(req, res) {
      Name.remove({name: req.params.name}, function(err){
          if(err) {
              console.log(err);
          }
          else {
              res.redirect('/');
          }
      })
  },
  findtheone: function(req, res) {
      Name.find({name: req.params.name}, function(err, name) {
          if(err) {
              console.log(err);
          }
          else {
              res.json(name[0]);
          }
     })
  },
}
