app.factory('topicFactory', ['$http', function($http){
    var factory = {};
    factory.index = function(callback) {
        $http.get('/topics').then(function(returned_data){
            callback(returned_data.data, factory.topic);
        });
    }
    factory.show = function(id, callback){
        $http.get('/topics/'+id).then(function(returned_data){
            callback(returned_data.data);
        });
    }
  factory.create = function(newtopic, callback) {
      $http.post('/topics', newtopic).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
  }
  factory.delete = function (id, callback){
      $http.delete('/topics/'+id).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      })
  }
  factory.addpost = function(post, callback){
      $http.put('/topicpost/'+post._topic, {id: post._id}).then(function(returned_data){
          callback(returned_data.data);
      })
  }
  return factory;
}]);
