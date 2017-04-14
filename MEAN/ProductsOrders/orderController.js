module.exports = function(app) {
    app.controller('ordersController', ['$scope', 'productFactory', function ($scope, productFactory){
        $scope.products = [];
        productFactory.getproducts(function (data){
            $scope.products = data;
        })
        $scope.buyproduct = function(val){
            productFactory.buyproducts(val);
        }
    }])
}
