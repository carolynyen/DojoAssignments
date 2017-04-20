app.controller('topicController', ['$scope', 'userFactory', 'topicFactory', '$routeParams', '$location', function($scope, userFactory, topicFactory, $routeParams, $location) {
    $scope.categories = ["HTML", "Ruby", "MEAN", "Python", "iOS"]
  var index = function () {
      topicFactory.index(function(data, topic) {
          $scope.topics = data;
          $scope.topic = topic;
      })
      userFactory.index(function(data, user) {
          $scope.users = data;
          $scope.user = user;
          if ($scope.user._id == undefined){
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
  $scope.remove = function(id){
      topicFactory.delete(id, function(data){
          if (data.message){
              $scope.messages = {message: data.message};
          }
           userFactory.removetopic(data);
           index();
      });
      console.log($scope.user.topics)
  }
  $scope.gotoposts = function(id){
      topicFactory.settopic(id, function(data){
          index();
      });
      $location.url('/posts');
  }
  // $scope.show = function(id){
  //     productFactory.show(id, function(data){
  //         $location.url("/show");
  //     });
  // }
}]);
