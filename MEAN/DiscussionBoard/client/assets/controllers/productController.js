app.controller('productController', ['$scope','productFactory', '$routeParams', '$location', function($scope, productFactory, $routeParams, $location) {
  $scope.product = productFactory.product;
  var index = function () {
      productFactory.index(function(data, product) {
          $scope.products = data;
          $scope.product = product;
      })
  }
  index();
  $scope.create = function() {
      $scope.messages = {message: ""};
      productFactory.create($scope.newProduct, function(data) {
          if (data.name == "ValidationError"){
              $scope.messages = {message: data.errors.name.message}
          }
          else {
              $scope.messages = {message: "Added successfully"}
              $scope.newProduct = {};
              index();
          }
      });
  }
  $scope.remove = function(id){
      productFactory.delete(id, function(data){
          if (data.message){
              $scope.messages = {message: data.message};
          }
           index();
      });
  }
  $scope.show = function(id){
      productFactory.show(id, function(data){
          $location.url("/show");
      });
  }
}]);
