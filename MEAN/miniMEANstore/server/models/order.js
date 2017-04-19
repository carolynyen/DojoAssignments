console.log('order model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
 _user: {type: Schema.Types.ObjectId, ref: 'Users'},
 _product: {type: Schema.Types.ObjectId, ref: 'Products'},
 qty: {type: Number, default: 0}
}, { timestamps: true });

mongoose.model('Orders', OrderSchema);
