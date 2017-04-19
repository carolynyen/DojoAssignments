app.factory('orderFactory', ['$http', function($http){
    var factory = {};
    factory.index = function(callback) {
        $http.get('/orders').then(function(returned_data){
            callback(returned_data.data);
        });
    }
    factory.show = function(id, callback) {
        $http.get('/orders/' + id).then(function(returned_data){
            callback(returned_data.data);
        });
    }
  factory.create = function(neworder, callback) {
      $http.post('/orders', neworder).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
  }
  factory.update = function(id, edit, callback) {
      $http.put('/products/' + id, edit).then(function(returned_data) {
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      })
  }
  factory.delete = function (id, callback){
      $http.delete('/orders/'+id).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      })
  }
  return factory;
}]);
