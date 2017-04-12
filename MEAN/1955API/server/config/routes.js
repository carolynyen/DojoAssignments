var names = require('../controllers/hawks.js');

module.exports = function(app) {

app.get('/', function (req, res){
    names.show(req, res)
});
app.get('/:name', function (req, res){
    names.findtheone(req, res);
});
app.get('/new/:name', function (req, res){
    names.addnew(req, res);
});

app.get('/remove/:name', function (req, res){
    names.removeone(req, res);
});

}
