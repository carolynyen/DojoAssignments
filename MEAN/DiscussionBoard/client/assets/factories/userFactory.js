app.factory('userFactory', ['$http', function($http){
    var factory = {};
    factory.user = {};
    factory.index = function(callback) {
        $http.get('/users').then(function(returned_data){
            callback(returned_data.data, factory.user);
        });
    }
    factory.logout = function(){
        factory.user = {};
    }
    factory.show = function(id, callback){
        $http.get('/users/'+id).then(function(returned_data){
            callback(returned_data.data);
        });
    }
  factory.create = function(newUser, callback) {
      $http.post('/users', newUser).then(function(returned_data){
          if (typeof(callback) == 'function'){
              factory.user = returned_data.data;
              callback(returned_data.data);
          }
      });
  }
  factory.delete = function (id, callback){
      $http.delete('/users/'+id).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      })
  }
  factory.addtopic = function(topic){
      $http.put('/users/'+topic._user, {id: topic._id});
  }
  factory.addcomment = function(comment, callback){
      $http.put('/userscomment/'+comment._user, {id: comment._id}).then(function(){
          if (typeof(callback) == 'function'){
              callback();
          }
      })
  }
  factory.addpost = function(post, callback){
      $http.put('/userspost/'+post._user, {id: post._id}).then(function(returned_data){
        callback(returned_data.data)
      })
  }
  factory.removetopic = function(topic){
      $http.delete('/usertopic/'+topic.deleted._user, {id: topic.deleted._id});
  }
  return factory;
}]);
