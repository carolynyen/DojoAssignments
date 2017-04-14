
    var app = angular.module('app', []);
    var factory = require('./factory.js');
    factory(app);

    var productController = require('./productController.js');
    productController(app);
    var orderController = require('./orderController.js');
    orderController(app);
