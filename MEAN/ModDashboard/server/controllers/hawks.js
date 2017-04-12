var mongoose = require('mongoose');
var Hawk = mongoose.model('Hawks');
var moment = require('moment');

module.exports = {
  show: function(req, res) {
      Hawk.find({}, function(err, hawks) {
          if(err) {
              console.log(err);
          }
          else {
              res.render('hawks', {hawks: hawks});
          }
     })
  },
  update: function(req, res, id) {
      Hawk.update({_id: id}, {name: req.body.name, age: req.body.age}, function(err){
          if(err) {
              console.log(err);
          }
          else {
              res.redirect('/');
          }
      })
  },
  showedit: function(req, res, id) {
      Hawk.find({_id: id}, function(err, hawks) {
          if(err) {
              console.log(err);
          }
          else {
              console.log(hawks);
              res.render('edit', {hawk: hawks});
          }
     })
  },
  display: function(req, res, id) {
      Hawk.find({_id: id}, function(err, hawks) {
          if(err) {
              console.log(err);
          }
          else {
              console.log(hawks);
              res.render('display', {hawk: hawks});
          }
     })
  },
  delete: function(req, res, id) {
      Hawk.remove({_id: id}, function(err){
          if(err) {
              console.log(err);
          }
          else {
              res.redirect('/');
          }
      })
  },
  create: function(req, res) {
      var hawk = new Hawk({name: req.body.name, age: req.body.age});
      var new_date = moment(hawk.created_at).format('MMMM Do YYYY');
      hawk.date = (new_date);
      hawk.save(function(err) {
          if(err) {
              console.log('something went wrong');
              res.render('index', {errors: hawk.errors})
          }
          else {
              console.log('successfully added a hawk!');
              res.redirect('/');
          }
      })
  }
}
