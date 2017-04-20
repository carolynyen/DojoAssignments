app.controller('userController', ['$scope','userFactory', '$routeParams', '$location', function($scope, userFactory, $routeParams, $location) {
  var index = function () {
      userFactory.show($routeParams.id, function(user) {
          $scope.pickeduser = user;
      })
      userFactory.index(function(data, user) {
          $scope.users = data;
          $scope.user = user;
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
              $location.url('/dashboard');
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
