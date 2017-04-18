app.controller('editController', ['$scope','friendFactory', '$routeParams', '$location', function($scope, friendFactory, $routeParams, $location) {
   friendFactory.show($routeParams.id, function(returnedData){
     $scope.friend = returnedData;
   });
   $scope.update = function(id){
       friendFactory.update(id, $scope.editFriend, function(){
       })
       $location.url('/');
   }
}]);
