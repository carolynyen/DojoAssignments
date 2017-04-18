app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
  var self = this;
  self.controlValue = "Current Name:";
  this.getUser = function() {
    userFactory.show(rParams.id, function passedToUserFactoryShow(user) {
      $scope.user = user;
    })
  }
  this.updateUser = function(){
    userFactory.update($scope.users, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
      $scope.user = userFromFactory;
      self.controlValue = "Updated Name:";
      console.log(this);
    });
  }
  this.getUser();
  console.log(this);
}]);
