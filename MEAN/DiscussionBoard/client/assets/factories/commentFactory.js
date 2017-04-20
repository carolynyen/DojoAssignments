app.factory('commentFactory', ['$http', function($http){
    var factory = {};
    factory.index = function(callback) {
        $http.get('/comments').then(function(returned_data){
            callback(returned_data.data);
        });
    }
  //   factory.show = function(id, callback) {
  //       $http.get('/orders/' + id).then(function(returned_data){
  //           callback(returned_data.data);
  //       });
  //   }
  factory.create = function(newcomment, callback) {
      $http.post('/comments', newcomment).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
  }
  // factory.update = function(id, edit, callback) {
  //     $http.put('/products/' + id, edit).then(function(returned_data) {
  //         if (typeof(callback) == 'function'){
  //             callback(returned_data.data);
  //         }
  //     })
  // }
  // factory.delete = function (id, callback){
  //     $http.delete('/orders/'+id).then(function(returned_data){
  //         if (typeof(callback) == 'function'){
  //             callback(returned_data.data);
  //         }
  //     })
  // }
  return factory;
}]);
