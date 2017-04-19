console.log('editcontroller');
app.controller('editController', ['$scope','friendFactory', '$routeParams', '$location', function($scope, friendFactory, $routeParams, $location) {
   friendFactory.show($routeParams.id, function(returnedData){
     $scope.friend = returnedData;
     $scope.friend.birthday = new Date(returnedData.birthday);
   });
   $scope.update = function(id){
       friendFactory.update(id, $scope.friend, function(){
       })
       $location.url('/');
   }
}]);
