console.log('user controller');
var mongoose = require('mongoose');
var User = mongoose.model('Users');

module.exports = {
  index: function(req,res){
      User.find({}, function(err, users) {
            if(err) {
                console.log(err);
            }
            else {
                res.json(users);
            }
       })
  },
  show: function(req,res){
      User.find({_id: req.params.id}).populate('comments').populate('topics').populate('posts').exec(function(err, user) {
            if(err) {
                console.log('here', user);
                res.json(err);
              }
            else {
                res.json(user[0]);
            }
       })
  },
  create: function(req,res){
      User.find({name: req.body.name}, function(err, users) {
            if(err) {
                console.log(err);
                res.json(err);
              }
            else {
                if (users[0] == undefined){
                    User.create(req.body, function(err, result){
                        if(err){
                            res.json(err)
                        }
                        else {
                            console.log('new user')
                            res.json(result)
                        }
                    }
                )}
                else {
                    console.log('old user')
                    res.json(users[0]);
                }
            }
       })
  },
  delete: function(req,res){
     User.remove({_id: req.params.id}, function(err){
            if(err) {
                console.log('nope', err);
            }
            else {
                res.json({message:'deleted successfully'});
            }
     })
  },
  removetopic: function(req,res){
     User.findOne({_id: req.params.id}, function(err, user){
            if(err) {
                console.log('nope', err);
            }
            else {
                console.log('hi')
                // user.topics.splice(indexOf(req.body.id), 1);
            }
     })
  },
  updatepost: function(req, res){
      User.findOne({_id: req.params.id}, function(err, user){
         user.posts.push(req.body.id);
         user.save(function(err){
            if(err) {
                res.json(err);
            } else {
                res.json(user)
            }
        });
   });
  },
  updatecomment: function(req, res){
      User.findOne({_id: req.params.id}, function(err, user){
         user.comments.push(req.body.id);
         user.save(function(err){
            if(err) {
                res.json(err);
            } else {
                res.json({message: "added comment to user"})
            }
        });
   });
  },
  update: function(req, res){
      User.findOne({_id: req.params.id}, function(err, user){
         user.topics.push(req.body.id);
         user.save(function(err){
            if(err) {
                res.json(err);
            } else {
                res.json({message: "added topic to user"})
            }
        });
   });
  }
}
