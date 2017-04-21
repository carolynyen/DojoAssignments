console.log('newcontroller');
app.controller('newController', ['$scope','friendFactory', '$location', function($scope, friendFactory, $location) {
  var index = function () {
      friendFactory.index(function(data) {
          $scope.friends = data;
      })
    //   if (Object.keys($scope.user).length === 0 && $scope.user.constructor === Object){
    //           $location.url('/');
    //   }
  }
  index();
  $scope.create = function() {
      console.log($scope.newFriend);
      friendFactory.create($scope.newFriend, function(data) {
          $scope.newFriend = {};
          index();
          $location.url('/');
      });
  }
  $scope.remove = function(id){
      friendFactory.delete(id);
      index();
  }
}]);
