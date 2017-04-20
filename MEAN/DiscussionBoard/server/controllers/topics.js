console.log('topic controller');
var mongoose = require('mongoose');
var Topic = mongoose.model('Topics');

module.exports = {
  index: function(req,res){
      Topic.find({}, false, true).populate('_user').exec(function(err, topics){
        if (err){
            console.log(err);
        }
        else {
            res.json(topics);
        }
    });
  },
  show: function(req,res){
      Topic.find({_id: req.body.id}, function(err, topic) {
            if(err) {
                console.log(err);
                res.json(err);
              }
            else {
                res.json(topic[0]);
            }
       })
  },
  create: function(req,res){
      Topic.create(req.body, function(err, result){
          if(err){
              res.json(err)
          }
          else {
              res.json(result)
          }
      })
  },
  delete: function(req,res){
      Topic.findOne({_id: req.params.id}, function(err, topic){
        if (err){
            console.log(err);
        }
        else {
            var deleted = topic;
            Topic.remove({_id: req.params.id}, function(err){
                   if(err) {
                       console.log('nope', err);
                   }
                   else {
                       res.json({deleted: deleted});
                   }
            })
        }
    });
  },
}
