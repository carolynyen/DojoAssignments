app.controller('postController', ['$scope', 'userFactory', 'topicFactory', 'postFactory', 'commentFactory', '$routeParams', '$location', function($scope, userFactory, topicFactory, postFactory, commentFactory, $routeParams, $location) {
  $scope.newComment={};
  var index = function () {
      topicFactory.index(function(data, topic) {
          $scope.topics = data;
          $scope.topic = topic;
      })
      userFactory.index(function(data, user) {
          $scope.users = data;
          $scope.user = user;
      })
      postFactory.index(function(data) {
          $scope.posts = data;
      })
  }
  index();
  $scope.createcomment = function(postid){
      $scope.messages = {message: ""};
      if (Object.keys($scope.newComment).length === 0 && $scope.newComment.constructor === Object){
          console.log('empty');
          $scope.messages = {message: "Need to fill out comment box"}
      }
      else{
          $scope.newComment[postid]._user = $scope.user._id;
          $scope.newComment[postid]._post = postid;
          commentFactory.create($scope.newComment[postid], function(data) {
          console.log(data)
          if (data.name == "ValidationError"){
              $scope.messages = {message: data.errors.message}
          }
          else {
              $scope.messages = {message: "Added comment successfully"}
              $scope.newComment = {};
              userFactory.addcomment(data);
              postFactory.addcomment(data)
              index();
          }
      });
    }
  }
  $scope.create = function() {
      $scope.messages = {message: ""};
      $scope.newPost._user = $scope.user._id;
      $scope.newPost._topic = $scope.topic._id;
      postFactory.create($scope.newPost, function(data) {
          if (data.name == "ValidationError"){
              $scope.messages = {message: data.errors.message}
          }
          else {
              $scope.messages = {message: "Added post successfully"}
              $scope.newPost = {};
              userFactory.addpost(data);
              index();
          }
      });
  }
}]);
