app.factory('userFactory', ['$http', function($http){
    var factory = {};
    factory.index = function(callback) {
        $http.get('/users').then(function(returned_data){
            callback(returned_data.data);
        });
    }
  factory.create = function(newUser, callback) {
      $http.post('/users', newUser).then(function(returned_data){
          if (typeof(callback) == 'function'){
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
  return factory;
}]);
