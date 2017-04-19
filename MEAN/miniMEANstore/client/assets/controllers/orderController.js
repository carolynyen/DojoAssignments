app.controller('orderController', ['$scope','orderFactory', 'productFactory', 'userFactory', '$routeParams', '$location', function($scope, orderFactory, productFactory, userFactory, $routeParams, $location) {
  var index = function () {
      orderFactory.index(function(data) {
          $scope.orders = data;
      })
      productFactory.index(function(data) {
          $scope.products = data;
      })
      userFactory.index(function(data) {
          $scope.users = data;
      })
  }
  index();
  $scope.create = function() {
      $scope.messages = {message: ""};
      if ($scope.newOrder == undefined){
          $scope.messages = {message: "Please select products, qty, and user."}
      }
      else {
      productFactory.update($scope.newOrder._product, $scope.newOrder.qty, function(data) {
          if (data.message == "Not enough product"){
              $scope.messages = {message: data.message}
          }
          else {
              orderFactory.create($scope.newOrder, function(data) {
                  if (data.name == "ValidationError"){
                      $scope.messages = {message: data.errors.name.message}
                  }
                  else {
                      $scope.messages = {message: "Added successfully"}
                      $scope.newOrder = {};
                      index();
                  }
              });
              index();
          }
      });
     }
  }
  $scope.remove = function(id){
      orderFactory.delete(id, function(data){
          if (data.message){
              $scope.messages = {message: data.message};
          }
      });
      index();
  }
}]);
