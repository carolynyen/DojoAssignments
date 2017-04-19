console.log('newcontroller');
app.controller('newController', ['$scope','friendFactory', '$location', function($scope, friendFactory, $location) {
  var index = function () {
      friendFactory.index(function(data) {
          $scope.friends = data;
      })
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
