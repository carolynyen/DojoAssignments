console.log('products controller');
var mongoose = require('mongoose');
var User = mongoose.model('Users');
var Product = mongoose.model('Products');
var Order = mongoose.model('Orders');

module.exports = {
  index: function(req,res){
      Product.find({}, function(err, users) {
            if(err) {
                console.log(err);
            }
            else {
                res.json(users);
            }
       })
  },
  create: function(req,res){
      Product.create(req.body, function(err, result){
      if(err){
        res.json(err)
      }
      else {
        res.json(result)
      }
    })
  },
  delete: function(req,res){
     Product.remove({_id: req.params.id}, function(err){
            if(err) {
                console.log('nope', err);
            }
            else {
                res.json({message:'deleted successfully'});
            }
     })
  },
  update: function(req,res){
      Product.find({_id: req.params.id}, function(err, products) {
            if(err) {
                console.log("nope");
            }
            else {
                if((products[0].qty - req.body.edit) < 0){
                    res.json({message:'Not enough product'});
                }
                else {
                    Product.update({_id: req.params.id}, {$inc: {qty: -req.body.edit}}, function(err){
                        if(err) {
                            console.log("nope");
                        }
                        else {
                            res.json({message:'updated successfully'});
                        }
                    })
                }
            }
       })
  },
  show: function(req,res){
      Product.find({_id: req.params.id}, function(err, products) {
            if(err) {
                console.log("nope");
            }
            else {
                res.json(products[0]);
            }
       })
  }
}
