console.log('friends controller');
var mongoose = require('mongoose');
var User = mongoose.model('Users');
var Product = mongoose.model('Products');
var Order = mongoose.model('Orders');

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
  create: function(req,res){
      User.create(req.body, function(err, result){
      if(err){
        res.json(err)
      }
      else {
        res.json(result)
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
}
