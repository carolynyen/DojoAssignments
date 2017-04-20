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
    .when('/posts', {
        templateUrl:'/partials/post.html',
        controller: 'postController',
    })
    // .when('/users', {
    //     templateUrl:'/partials/users.html',
    //     controller: 'userController',
    // })
    // .when('/show', {
    //     templateUrl:'/partials/show.html',
    //     controller: 'productController',
    // })
    // .when('/settings', {
    //     templateUrl:'/partials/settings.html',
    //     controller: 'orderController',
    // })
    .otherwise({
      redirectTo: '/'
    });
});
