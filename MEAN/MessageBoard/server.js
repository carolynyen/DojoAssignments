var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
var postSchema = new mongoose.Schema({
 name: { type: String, required: [true, 'Name cannot be blank'], minlength: [4, 'Name must be more than 4 characters']},
 text: { type: String, required: [true, 'Message cannot be blank'], minlength: [1, 'Message must be more than 1 character']},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}]
}, { timestamps: true });
mongoose.model('Posts', postSchema);
var Post = mongoose.model('Posts');


var commentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Posts'},
 name: { type: String, required: [true, 'Name cannot be blank'], minlength: [4, 'Name must be more than 4 characters'] },
 text: { type: String, required: [true, 'Comment cannot be blank'], minlength: [1, 'Comment must be more than 1 character'] },
}, {timestamps: true });
mongoose.model('Comments', commentSchema);
var Comment = mongoose.model('Comments');


var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

app.get('/', function (req, res){
    Post.find({}, false, true).populate('comments').exec(function(err,posts){
        if (err){
            console.log(err);
        }
        else {
            res.render('index', {messages: posts});
        }
    });
});

app.post('/messages', function (req, res){
    var post = new Post({name: req.body.name, text: req.body.text});
    post.save(function(err) {
    if(err) {
        res.render('index', {errors: post.errors})
    }
    else {
        res.redirect('/');
    }
})
});


app.post('/comments/:id', function (req, res){
   Post.findOne({_id: req.params.id}, function(err, post){
       var comment = new Comment();
       comment.name = req.body.name;
       comment.text = req.body.comment;
       comment._post = post._id;
       comment.save(function(err){
               post.comments.push(comment);
               post.save(function(err){
                    if(err) {
                        res.render('index', {errors: comment.errors});
                    } else {
                         res.redirect('/');
                    }
                });
        });
   });
});
