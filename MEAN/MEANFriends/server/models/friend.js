console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 1},
 age: { type: String, required: true, minlength: 1},
 birthday: { type: Date, required: true}
}, { timestamps: true });

mongoose.model('Friends', FriendSchema);
