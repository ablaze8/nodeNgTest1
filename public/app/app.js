var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/screen1', {
                templateUrl: '/views/screen1.html',
                controller: 'screen1Controller'
            })
            .when('/screen2', {
                templateUrl: '/views/screen2.html',
                controller: 'screen2Controller'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);