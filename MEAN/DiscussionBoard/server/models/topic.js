console.log('topic model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
     _user: {type: Schema.Types.ObjectId, ref: 'Users'},
     posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}],
     name: { type: String, required: true, minlength: 1},
     description: { type: String, required: true, minlength: 1},
     category: { type: String, required:true},
}, { timestamps: true });

mongoose.model('Topics', TopicSchema);
