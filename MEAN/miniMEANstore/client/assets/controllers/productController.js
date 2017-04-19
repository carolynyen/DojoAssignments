app.controller('productController', ['$scope','productFactory', '$routeParams', '$location', function($scope, productFactory, $routeParams, $location) {
  var index = function () {
      productFactory.index(function(data) {
          $scope.products = data;
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
      });
      index();
  }
}]);
