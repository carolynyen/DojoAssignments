var app = angular.module('app', ['ngRoute', 'ngMessages', 'angularMoment']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/dashboard', {
        templateUrl:'/partials/dashboard.html',
        controller: 'orderController',
    })
    .when('/products', {
        templateUrl:'/partials/products.html',
        controller: 'productController',
    })
    .when('/orders', {
        templateUrl:'/partials/orders.html',
        controller: 'orderController',
    })
    .when('/users', {
        templateUrl:'/partials/users.html',
        controller: 'userController',
    })
    .when('/show', {
        templateUrl:'/partials/show.html',
        controller: 'productController',
    })
    .when('/settings', {
        templateUrl:'/partials/settings.html',
        controller: 'orderController',
    })
    .otherwise({
      redirectTo: '/dashboard'
    });
});
