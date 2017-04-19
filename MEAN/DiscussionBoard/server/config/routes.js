console.log('future routes');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');
var users = require('../controllers/users.js');
module.exports = function(app){

    app.get('/', function (req, res){
        res.sendFile('index.html', {root: __dirname + './../../client'});
    });
    app.get('/users', users.index);
    app.get('/products/:id', products.show);
    app.put('/products/:id', products.update);
    app.post('/users', users.create);
    app.delete('/users/:id', users.delete);
    app.get('/products', products.index);
    app.post('/products', products.create);
    app.delete('/products/:id', products.delete);
    app.get('/orders', orders.index);
    app.post('/orders', orders.create);
    app.delete('/orders/:id', orders.delete);
}
