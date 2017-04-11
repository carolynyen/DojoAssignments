var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var moment = require('moment');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
 name: { type: String, required: [true, 'error message'], minlength: 2},
 quote: { type: String, required: true, minlength: 2},
 created_at: { type: Date, default: Date.now},
 date: {type: String, default: ""},
 likes: {type: Number, default: 0}
})
mongoose.model('Quotes', QuoteSchema);
var Quote = mongoose.model('Quotes');

var path = require('path');
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

app.get('/quotes', function (req, res){
    Quote.find({}, function(err, quotes) {
        if(err) {
            console.log(err);
        }
        else {
            res.render('quotes', {quotes: quotes});
        }
   }).sort({"likes":-1})
});
app.get('/', function (req, res){
    res.render('index');
});

app.post('/quotes/:id', function (req, res){
    var id = req.params.id;
    Quote.update({_id: id}, {$inc: {likes: 1}}, function(err){
        if(err) {
            console.log(err);
        }
        else {
            res.redirect('/quotes');
        }
    })
});

app.post('/quotes', function (req, res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    var new_date = moment(quote.created_at).format('MMMM Do YYYY, [at] h:mm:ss a');
    quote.date = (new_date);
    quote.save(function(err) {
        if(err) {
            console.log('something went wrong', err);
            res.render('index', {errors: quote.errors})
        }
        else {
            console.log('successfully added a quote!');
            res.redirect('/');
        }
    })
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
