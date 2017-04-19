console.log('product model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 1},
 description: { type: String, required: false, default: ""},
 image: { type: String, required: false, default: ""},
 _orders: {type: Schema.Types.ObjectId, ref: 'Orders'},
 qty: { type: Number, required: true, default: 1},
}, { timestamps: true });

mongoose.model('Products', ProductSchema);
