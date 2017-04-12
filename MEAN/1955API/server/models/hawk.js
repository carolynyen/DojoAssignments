// require mongoose
var mongoose = require('mongoose');

var nameSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 1},
})

mongoose.model('Names', nameSchema);
