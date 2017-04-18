console.log('future routes');
var friends = require('../controllers/friends.js');
module.exports = function(app){

    app.get('/', function (req, res){
        res.sendFile('index.html', {root: __dirname + './../../client'});
    });
    app.get('/friends', friends.index);
    app.get('/friends/:id', friends.show);
    app.post('/friends', friends.create);
    app.put('/friends/:id', friends.update);
    app.delete('/friends/:id', friends.delete);
}
