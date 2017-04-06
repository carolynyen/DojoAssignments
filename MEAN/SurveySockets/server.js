var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var user;
var number;
app.use(bodyParser.urlencoded({extended: true}));

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log(socket.id);
    socket.on("button_clicked", function (data){
        console.log('Someone clicked a button!  Reason: ' + data.reason);
        socket.emit('server_response', {response: "sockets are the best!"});
    })
    socket.on("posting_form", function (data){
        number = Math.floor(Math.random()*999+1)
        socket.emit('updated_message', data);
        socket.emit('random_number', number)
    })
})

// //  this is just the configuration code that we've already used
// io.sockets.on('connection', function (socket) {
//     //  EMIT:
//     socket.emit('my_emit_event');
//     //  BROADCAST:
//     socket.broadcast.emit("my_broadcast_event");
//     //  FULL BROADCAST:
//     io.emit("my_full_broadcast_event");
// })


app.get('/', function (req, res){
  req
  res.render('index');
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
