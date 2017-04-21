console.log('future routes');
var topics = require('../controllers/topics.js');
var comments = require('../controllers/comments.js');
var posts = require('../controllers/posts.js');
var users = require('../controllers/users.js');

module.exports = function(app){

    app.get('/', function (req, res){
        res.sendFile('index.html', {root: __dirname + './../../client'});
    });
    app.get('/users', users.index);
    app.post('/posts', posts.create);
    app.post('/comments', comments.create);
    app.post('/users', users.create);
    app.delete('/users/:id', users.delete);
    app.put('/users/:id', users.update);
    app.put('/upvote/:id', posts.upvote);
    app.put('/downvote/:id', posts.downvote);
    app.post('/topic', topics.show);
    app.post('/topics', topics.create);
    app.get('/topics/:id', topics.show);
    app.get('/users/:id', users.show);
    app.delete('/topics/:id', topics.delete);
    app.delete('/usertopic/:id', users.removetopic);
    app.get('/topics', topics.index);
    app.put('/userspost/:id', users.updatepost);
    app.put('/topicpost/:id', topics.updatepost);
    app.put('/userscomment/:id', users.updatecomment);
    app.put('/postscomment/:id', posts.updatecomment);
}
