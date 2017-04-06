var express = require("express");
var app = express();
var count = 0;

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log(socket.id);
    socket.on("button_clicked", function (data){
        count += 1;
        io.emit('server_response', {response: count});
    })
    socket.on("reset_clicked", function (data){
        count = 0;
        io.emit('server_response', {response: count});
    })
})

app.get('/', function (req, res){
  res.render('index');
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
