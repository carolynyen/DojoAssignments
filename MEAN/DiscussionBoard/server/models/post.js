console.log('post model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    text: { type: String, required: true, minlength: 1},
    upvotes: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    downvotes: [{type: Schema.Types.ObjectId, ref: 'Users'}],
    _user: {type: Schema.Types.ObjectId, ref: 'Users'},
    _topic: {type: Schema.Types.ObjectId, ref: 'Topics'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}],
}, { timestamps: true });

mongoose.model('Posts', PostSchema);
