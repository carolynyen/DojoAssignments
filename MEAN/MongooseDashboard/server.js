var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var moment = require('moment');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var HawkSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 age: { type: Number, required: true, minlength: 1},
 created_at: { type: Date, default: Date.now},
 date: {type: String, default: ""}
})
mongoose.model('Hawks', HawkSchema);
var Hawk = mongoose.model('Hawks');

var path = require('path');
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

app.get('/', function (req, res){
    Hawk.find({}, function(err, hawks) {
        if(err) {
            console.log(err);
        }
        else {
            res.render('hawks', {hawks: hawks});
        }
   })
});
app.get('/hawks/new', function (req, res){
    res.render('index');
});

app.post('/hawks/edit/:id', function (req, res){
    var id = req.params.id;
    Hawk.update({_id: id}, {name: req.body.name, age: req.body.age}, function(err){
        if(err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    })
});

app.get('/hawks/edit/:id', function (req, res){
    var id = req.params.id;
    Hawk.find({_id: id}, function(err, hawks) {
        if(err) {
            console.log(err);
        }
        else {
            console.log(hawks);
            res.render('edit', {hawk: hawks});
        }
   })
});

app.get('/hawks/:id', function (req, res){
    var id = req.params.id;
    Hawk.find({_id: id}, function(err, hawks) {
        if(err) {
            console.log(err);
        }
        else {
            console.log(hawks);
            res.render('display', {hawk: hawks});
        }
   })
});


app.post('/hawks/destroy/:id', function (req, res){
    var id = req.params.id;
    Hawk.remove({_id: id}, function(err){
        if(err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    })
});


app.post('/hawks', function (req, res){
    var hawk = new Hawk({name: req.body.name, age: req.body.age});
    var new_date = moment(hawk.created_at).format('MMMM Do YYYY');
    hawk.date = (new_date);
    hawk.save(function(err) {
        if(err) {
            console.log('something went wrong');
            res.render('index', {errors: hawk.errors})
        }
        else {
            console.log('successfully added a hawk!');
            res.redirect('/');
        }
    })
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
