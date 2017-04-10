var express = require("express");
var app = express();
var users= {};
var chat = [];
var temp;

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log(socket.id);
    socket.on("got_a_new_user", function (data){
        users[socket.id] = data;
        chat.push(data+" has joined the chat!");
        io.emit('new_user', {user: data});
    })
    socket.on("new_message", function (data){
        var name = users[socket.id]
        chat.push(data);
        io.emit('update_message', data);
    })
    socket.on('disconnect', function () {
        temp = users[socket.id];
        delete users[socket.id];
        var count = 0;
        for (var i in users) {
            if (users.hasOwnProperty(i)) count++;
        }
        if (count == 0){
            chat = [];
        }
        io.emit('disconnect_user', temp);
    })
    socket.on("user_left", function (data){
        chat.push(data+" has left the chat!");
    })
})

app.get('/', function (req, res){
  res.render('index', {messages: chat});
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
