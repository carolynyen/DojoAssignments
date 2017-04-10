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
app.post('/quotes', function (req, res){
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
