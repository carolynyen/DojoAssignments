var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var user;
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});

app.post('/back', function (req, res){
  res.redirect('/');
});

app.get('/results', function (req, res){
  res.render('results', {users: user});
});

app.post('/users', function (req, res){
  user = req.body
  res.redirect('/results');
})


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.listen(8000, function(){console.log("listening on port 8000");
console.log(__dirname);})
