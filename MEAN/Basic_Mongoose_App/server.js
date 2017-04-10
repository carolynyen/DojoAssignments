var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
}, {timestamps: true})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

var path = require('path');
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

//
// User.findOne({}, function(err, user) {
//  // Retrieve 1 object
// })
// // ...delete all records of the User Model
// User.remove({}, function(err){
// })
// // ...delete 1 record by a certain key/vaue.
// User.remove({_id: 'insert record unique id here'}, function(err){
// })
// // ...update any records that match the query
// User.update({name:'Andrinnna'}, {name:'Andriana'}, function(err){
// })
// // another way to update a record
// User.findOne({name: 'Andriana'}, function(err, user){
//  // user.name = 'Andri'
//  // user.save(function(err){
//  // })
// })


// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
// var UserSchema = new mongoose.Schema({
//     first_name:  { type: String, required: true, minlength: 6},
//     last_name: { type: String, required: true, maxlength: 20 },
//     age: { type: Number, min: 1, max: 150 },
//     email: { type: String, required: true }
// }, {timestamps: true });


app.get('/', function (req, res){
    var users;
    User.find({}, function(err, users) {
        if(err) {
            console.log(err);
        }
        else {
            res.render('index', {users: users});
        }
   })
});
app.post('/users', function (req, res){
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err) {
        if(err) {
            console.log('something went wrong');
            res.render('index', {title: 'you have errors!', errors: user.errors})
        }
        else {
            console.log('successfully added a user!');
            res.redirect('/');
        }
    })
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
