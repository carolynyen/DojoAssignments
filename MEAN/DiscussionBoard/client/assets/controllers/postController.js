app.controller('postController', ['$scope', 'userFactory', 'topicFactory', 'postFactory', 'commentFactory', '$routeParams', '$location', '$route', function($scope, userFactory, topicFactory, postFactory, commentFactory, $routeParams, $location, $route) {
  $scope.newComment={};
  $scope.newPost={};
  $scope.user = {};
  $scope.topics = {};
  var index = function () {
      topicFactory.show($routeParams.id, function(topic) {
          $scope.topic = topic;
          $scope.posts = $scope.topic.posts;
          $scope.comments = $scope.topic.comments;
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
  $scope.upvote = function(postid){
      postFactory.upvote(postid, $scope.user._id, function(data){
          index();
      })
  }
  $scope.downvote = function(postid){
      postFactory.downvote(postid, $scope.user._id, function(data){
          index();
      })
  }
  $scope.logout = function(){
      userFactory.logout();
      $location.url('/')
  }
  $scope.createcomment = function(postid){
      $scope.messages = {message: ""};
      if (Object.keys($scope.newComment).length === 0 && $scope.newComment.constructor === Object){
          $scope.messages = {message: "Need to fill out comment box"}
      }
      else{
          $scope.newComment[postid]._user = $scope.user._id;
          $scope.newComment[postid]._post = postid;
          commentFactory.create($scope.newComment[postid], function(data) {
          if (data.name == "ValidationError"){
              $scope.messages = {message: data.errors.message}
          }
          else {
              $scope.messages = {message: "Added comment successfully"}
              $scope.newComment = {};
              userFactory.addcomment(data, function(){
                  index();
                  postFactory.addcomment(data, function(){
                      index();
                  })
              });
          }
      });
    }
  }
  $scope.create = function() {
      $scope.messages = {message: ""};
      if (Object.keys($scope.newPost).length === 0 && $scope.newPost.constructor === Object){
          $scope.messages = {message: "Need to fill out post box"}
      }
      else{
      $scope.newPost._user = $scope.user._id;
      $scope.newPost._topic = $scope.topic._id;
      postFactory.create($scope.newPost, function(data) {
          if (data.name == "ValidationError"){
              $scope.messages = {message: data.errors.message}
          }
          else {
              $scope.messages = {message: "Added post successfully"}
              $scope.newPost = {};
              topicFactory.addpost(data, function(data){
                  userFactory.addpost(data, function(data){
                      index();
                  });
              });
          }
      });
    }
  }
}]);
