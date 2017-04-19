console.log('orders controller');
var mongoose = require('mongoose');
var User = mongoose.model('Users');
var Product = mongoose.model('Products');
var Order = mongoose.model('Orders');

module.exports = {
  index: function(req,res){
      Order.find({}, false, true).populate('_user').populate('_product').exec(function(err,orders){
        if (err){
            console.log(err);
        }
        else {
            res.json(orders);
        }
    });
  },
  create: function(req,res){
      Order.create(req.body, function(err, result){
      if(err){
        res.json(err)
      }
      else {
        res.json(result)
      }
    })

  },
  delete: function(req,res){
     Order.remove({_id: req.params.id}, function(err){
            if(err) {
                console.log('nope', err);
            }
            else {
                res.json({message:'deleted successfully'});
            }
     })
  },
}
