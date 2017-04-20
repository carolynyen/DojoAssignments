console.log('comments controller');
var mongoose = require('mongoose');
var Comment = mongoose.model('Comments');

module.exports = {
  // index: function(req,res){
  //     Comment.find({}, false, true).populate('_user').populate('_post').exec(function(err,comments){
  //       if (err){
  //           console.log(err);
  //       }
  //       else {
  //           res.json(comments);
  //       }
  //   });
  // },
  create: function(req,res){
      Comment.create(req.body, function(err, result){
      if(err){
        res.json(err)
      }
      else {
        res.json(result)
      }
    })
  },
  delete: function(req,res){
     Comment.remove({_id: req.params.id}, function(err){
            if(err) {
                console.log('nope', err);
            }
            else {
                res.json({message:'deleted successfully'});
            }
     })
  },
}
