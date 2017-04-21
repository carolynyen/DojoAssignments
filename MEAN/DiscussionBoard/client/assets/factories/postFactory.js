app.factory('postFactory', ['$http', function($http){
    var factory = {};
  factory.create = function(newpost, callback) {
      $http.post('/posts', newpost).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
  }
  factory.addcomment = function(comment, callback){
      $http.put('/postscomment/'+comment._post, {id: comment._id}).then(function(){
          callback()
      })
  }
  factory.upvote = function(postid, userid, callback){
      $http.put('/upvote/'+postid, {id: userid}).then(function(returned_data){
          callback(returned_data.data)
      })
  }
  factory.downvote = function(postid, userid, callback){
      $http.put('/downvote/'+postid, {id: userid}).then(function(returned_data){
          callback(returned_data.data)
      })
  }
  return factory;
}]);
