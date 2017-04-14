module.exports = function(app) {
    app.factory('productFactory', ['$http', function($http){
        var products = [
            {name: 'Mouse', price: 34, qty: 50},
            {name: 'Tray', price: 24.32, qty: 50},
            {name: 'Keyboard', price: 24.4, qty: 50}];
            var factory = {};
            factory.getproducts = function (callback){
                callback(products);
            }
            factory.addproducts = function (product){
                products.push(product);
            }
            factory.deleteproducts = function (val){
                products.splice(products.indexOf(val),1);
            }
            factory.buyproducts = function (val){
                var prod = products.splice(products.indexOf(val),1);
                if(prod[0].qty > 0){
                    prod[0].qty -= 1
                }
                products.push(prod[0]);
            }
            return factory;
    }])
}
