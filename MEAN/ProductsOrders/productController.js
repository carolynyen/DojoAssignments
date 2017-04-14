module.exports = function(app) {
    app.controller('productsController', ['$scope', 'productFactory', function ($scope, productFactory){
        $scope.products = [];
        productFactory.getproducts(function (data){
            $scope.products = data;
        })
        $scope.addproduct = function(){
            $scope.add_product.price = Number($scope.add_product.price)
            $scope.add_product.qty = 50;
            productFactory.addproducts($scope.add_product);
            $scope.add_product = {};
        }
        $scope.deleteproduct = function(val){
            productFactory.deleteproducts(val);
        }
    }])
}
