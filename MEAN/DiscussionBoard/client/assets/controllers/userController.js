app.controller('userController', ['$scope','userFactory', '$routeParams', '$location', function($scope, userFactory, $routeParams, $location) {
  var index = function () {
      userFactory.index(function(data) {
          $scope.users = data;
      })
  }
  index();
  $scope.create = function() {
      $scope.messages = {message: ""};
      userFactory.create($scope.newUser, function(data) {
          if (data.name == "ValidationError"){
              $scope.messages = {message: data.errors.name.message}
          }
          else if (data.code == "11000"){
              $scope.messages = {message: "Username must be unique."}
          }
          else {
              $scope.messages = {message: "Added successfully"}
              $scope.newUser = {};
              index();
          }
      });
  }
  $scope.remove = function(id){
      userFactory.delete(id, function(data){
          if (data.message){
              $scope.messages = {message: data.message};
          }
      });
      index();
  }
  $scope.update = function(id){
      userFactory.update(id, $scope.editUser, function(){
      })
  }
}]);
