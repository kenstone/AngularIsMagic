var app = angular.module('app',[]);
app.directive('spinner', function() {
    return {
        restrict: 'E',
        replace: true,
        template: "<div><img src='spinner.gif'></div>"
    }
})