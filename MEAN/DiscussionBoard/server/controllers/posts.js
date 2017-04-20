console.log('posts controller');
var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Comment = mongoose.model('Comments');
var Topic = mongoose.model('Topics');
var User = mongoose.model('Users');

module.exports = {
  index: function(req,res){
      console.log(req.params.id)
      Topic.findOne({_id: req.params.id}, function(err, topic){
            if(err) {
                res.json(err);
            } else {
                // Post.find({}, false, true).populate([{path: 'comments',model: 'Comments', populate: {path: '_user', model: 'Users'}},
                //           {path: '_user', model: 'Users'}]).exec(function(err, post) {
                //           if (err) {
                //               res.json(err);
                //           } else {
                //               res.json(post);
                //           }
                //   })
            }
      });

  },
  updatecomment: function(req, res){
      Post.findOne({_id: req.params.id}, function(err, post){
         post.comments.push(req.body.id);
         post.save(function(err){
            if(err) {
                res.json(err);
            } else {
                res.json({message: "added comment to post"})
            }
        });
   });
  },
  create: function(req,res){
      Post.create(req.body, function(err, result){
      if(err){
        res.json(err)
      }
      else {
        res.json(result)
      }
    })

  },
  delete: function(req,res){
     Post.remove({_id: req.params.id}, function(err){
            if(err) {
                console.log('nope', err);
            }
            else {
                res.json({message:'deleted successfully'});
            }
     })
  },
}
