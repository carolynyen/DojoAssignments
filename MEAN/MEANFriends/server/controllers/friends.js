console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friends');

module.exports = {
  index: function(req,res){
      Friend.find({}, function(err, friends) {
            if(err) {
                console.log(err);
            }
            else {
                res.json(friends);
            }
       })
  },
  create: function(req,res){
      Friend.create(req.body, function(err, result){
      if(err){
        console.log('nope')
      }else{
        res.json(result)
      }
    })
  },
  update: function(req,res){
      console.log(req.body)
      Friend.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, birthday: req.body.birthday}, function(err){
            if(err) {
                console.log(err);
            }
            else {
                res.json({message:'updated'});
            }
        })
  },
  delete: function(req,res){
     Friend.remove({_id: req.params.id}, function(err){
            if(err) {
                console.log('nope');
            }
            else {
                res.json({message:'delete'});
            }
     })
  },
  show: function(req,res){
      Friend.find({_id: req.params.id}, function(err, friends) {
            if(err) {
                console.log("nope");
            }
            else {
                res.json(friends[0]);
            }
       })
  }
}
