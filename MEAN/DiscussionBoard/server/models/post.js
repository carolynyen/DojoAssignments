console.log('post model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    text: { type: String, required: true, minlength: 1},
    upvotes: { type: Number, required: false, default: 0},
    downvotes: { type: Number, required: false, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'Users'},
    _topic: {type: Schema.Types.ObjectId, ref: 'Topics'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}],
}, { timestamps: true });

mongoose.model('Posts', PostSchema);
