console.log('comment model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
 _user: {type: Schema.Types.ObjectId, ref: 'Users'},
 _post: {type: Schema.Types.ObjectId, ref: 'Posts'},
 text: { type: String, required: true, minlength: 1},
}, { timestamps: true });

mongoose.model('Comments', CommentSchema);
