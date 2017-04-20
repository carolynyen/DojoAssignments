console.log('users model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
 name: { type: String, unique: [true, 'username already taken'], required: [true, 'Must fill in Name'], minlength: 1},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}],
 topics: [{type: Schema.Types.ObjectId, ref: 'Topics'}],
 posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}],
}, { timestamps: true });

mongoose.model('Users', UserSchema);
