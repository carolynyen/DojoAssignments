app.controller('userController', ['$scope','userFactory', '$routeParams', '$location', function($scope, userFactory, $routeParams, $location) {
  var index = function () {
      if ($routeParams.id != undefined){
          userFactory.show($routeParams.id, function(user) {
              $scope.pickeduser = user;
          })
      }
      userFactory.index(function(data, user) {
          $scope.users = data;
          $scope.user = user;
          if (Object.keys($scope.user).length === 0 && $scope.user.constructor === Object){
              $location.url('/');
          }
      })
  }
  index();
  $scope.logout = function(){
      userFactory.logout();
      $location.url('/')
  }
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
