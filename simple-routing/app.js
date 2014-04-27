var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/intro', {
        templateUrl: 'partials/intro.html'
    });
    $routeProvider.when('/details', {
        templateUrl: 'partials/details.html'
    });
    $routeProvider.otherwise({redirectTo: '/intro'});
}]);