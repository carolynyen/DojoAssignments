app.factory('topicFactory', ['$http', function($http){
    var factory = {};
    factory.topic={};
    factory.index = function(callback) {
        $http.get('/topics').then(function(returned_data){
            callback(returned_data.data, factory.topic);
        });
    }
    factory.settopic = function(id, callback){
        $http.post('/topic', {id}).then(function(returned_data){
            if (typeof(callback) == 'function'){
                factory.topic = returned_data.data;
                callback(returned_data.data);
            }
        });
    }
  factory.create = function(newtopic, callback) {
      $http.post('/topics', newtopic).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
  }
  // factory.update = function(id, edit, callback) {
  //     $http.put('/products/' + id, {edit}).then(function(returned_data) {
  //         if (typeof(callback) == 'function'){
  //             callback(returned_data.data);
  //         }
  //     })
  // }
  factory.delete = function (id, callback){
      $http.delete('/topics/'+id).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      })
  }
  // factory.show = function (id, callback){
  //     $http.get('/products/'+id).then(function(returned_data){
  //         if (typeof(callback) == 'function'){
  //             factory.product = returned_data.data;
  //             callback(returned_data.data);
  //         }
  //     })
  // }
  return factory;
}]);
