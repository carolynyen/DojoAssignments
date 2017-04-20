console.log('topic controller');
var mongoose = require('mongoose');
var Topic = mongoose.model('Topics');
var Post = mongoose.model('Posts');
var Comment = mongoose.model('Comments');
var User = mongoose.model('Users');

module.exports = {
  index: function(req,res){
      Topic.find({}, false, true)
      .populate([{path: '_user', model: 'Users'}, {path: 'posts', model: 'Posts', populate: [{path: '_user', model: 'Users'}, {path: 'comments', model: 'Comments', populate: {path: '_user', model: 'Users'}}]}])
      .exec(function(err, topics){
        if (err){
            console.log(err);
        }
        else {
            res.json(topics);
        }
    });
  },
  show: function(req,res){
      Topic.find({_id: req.params.id})
      .populate([{path: '_user', model: 'Users'}, {path: 'posts', model: 'Posts', populate: [{path: '_user', model: 'Users'}, {path: 'comments', model: 'Comments', populate: {path: '_user', model: 'Users'}}]}])
      .exec(function(err, topic) {
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
  updatepost: function(req, res){
      Topic.findOne({_id: req.params.id}, function(err, topic){
         topic.posts.push(req.body.id);
         topic.save(function(err){
            if(err) {
                res.json(err);
            } else {
                res.json(topic)
            }
        });
   });
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
