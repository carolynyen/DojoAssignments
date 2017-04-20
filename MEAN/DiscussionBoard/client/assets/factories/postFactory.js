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
