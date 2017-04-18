var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'/partials/main.html',
        controller: 'newController',
    })
    .when('/edit/:id', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
    })
    .when('/show/:id', {
      templateUrl: '/partials/show.html',
      controller: 'editController',
    })
    .when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
    })
    .otherwise({
      redirectTo: '/'
    });
});
