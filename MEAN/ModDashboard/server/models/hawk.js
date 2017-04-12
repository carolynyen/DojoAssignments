// require mongoose
var mongoose = require('mongoose');

var HawkSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 age: { type: Number, required: true, minlength: 1},
 created_at: { type: Date, default: Date.now},
 date: {type: String, default: ""}
})

mongoose.model('Hawks', HawkSchema);
