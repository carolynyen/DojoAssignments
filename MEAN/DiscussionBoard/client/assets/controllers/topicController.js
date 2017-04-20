app.controller('topicController', ['$scope', 'userFactory', 'topicFactory', '$routeParams', '$location', function($scope, userFactory, topicFactory, $routeParams, $location) {
    $scope.categories = ["HTML", "Ruby", "MEAN", "Python", "iOS"];
    $scope.newTopic = {};
    $scope.user = {};
  var index = function () {
      topicFactory.index(function(data, topic) {
          $scope.topics = data;
          $scope.topic = topic;
      })
      userFactory.index(function(data, user) {
          $scope.users = data;
          $scope.user = user;
          if (Object.keys($scope.user).length === 0 && $scope.user.constructor === Object){
              $location.url('/');
          }
      })
  }
  index();
  $scope.filter = function(){
      $scope.filter_name = $scope.filter_me;
  }
  $scope.create = function() {
      $scope.messages = {message: ""};
      if (Object.keys($scope.newTopic).length === 0 && $scope.newTopic.constructor === Object){
          $scope.messages = {message: "Need to fill out all topic inputs"}
      }
      else{
      $scope.newTopic._user = $scope.user._id;
      topicFactory.create($scope.newTopic, function(data) {
          if (data.name == "ValidationError"){
              $scope.messages = {message: data.errors.name.message}
          }
          else {
              $scope.messages = {message: "Added successfully"}
              userFactory.addtopic(data);
              $scope.newTopic = {};
              index();
          }
      });
        }
  }
  $scope.remove = function(id){
      topicFactory.delete(id, function(data){
          if (data.message){
              $scope.messages = {message: data.message};
          }
           userFactory.removetopic(data);
           index();
      });
  }
  $scope.gotoposts = function(id){
    $location.url('/posts/'+id);
  }
  $scope.gotouser = function(id){
    $location.url('/users/'+id);
  }
}]);
