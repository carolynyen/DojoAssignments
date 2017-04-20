var app = angular.module('app', ['ngRoute', 'ngMessages', 'angularMoment']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'/partials/login.html',
        controller: 'userController',
    })
    .when('/dashboard', {
        templateUrl:'/partials/dashboard.html',
        controller: 'topicController',
    })
    .when('/posts/:id', {
        templateUrl:'/partials/post.html',
        controller: 'postController',
    })
    .when('/users/:id', {
        templateUrl:'/partials/user.html',
        controller: 'userController',
    })
    .otherwise({
      redirectTo: '/'
    });
});
