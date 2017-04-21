console.log('posts controller');
var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Comment = mongoose.model('Comments');
var Topic = mongoose.model('Topics');
var User = mongoose.model('Users');

module.exports = {
    upvote: function(req, res){
        Post.findOne({_id: req.params.id}, function(err, post){
           if (post.upvotes.indexOf(req.body.id) == "-1"){
               post.upvotes.push(req.body.id);
               post.save(function(err){
                   if(err) {
                       res.json(err);
                   } else {
                       res.json(post)
                   }
               });
           }
       });
    },
    downvote: function(req, res){
        Post.findOne({_id: req.params.id}, function(err, post){
            if (post.downvotes.indexOf(req.body.id) == "-1"){
                post.downvotes.push(req.body.id);
                post.save(function(err){
                    if(err) {
                        res.json(err);
                    } else {
                        res.json(post)
                    }
                });
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
