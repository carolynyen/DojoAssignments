var hawks = require('../controllers/hawks.js');

module.exports = function(app) {
app.get('/', function (req, res){
    hawks.show(req, res)
});

app.get('/hawks/new', function (req, res){
    res.render('index');
});

app.post('/hawks/edit/:id', function (req, res){
    var id = req.params.id;
    hawks.update(req, res, id)
});

app.get('/hawks/edit/:id', function (req, res){
    var id = req.params.id;
    hawks.showedit(req, res, id);
});

app.get('/hawks/:id', function (req, res){
    var id = req.params.id;
    hawks.display(req, res, id);
});

app.post('/hawks/destroy/:id', function (req, res){
    var id = req.params.id;
    hawks.delete(req, res, id);
});

app.post('/hawks', function (req, res){
    hawks.create(req, res)
});
}
