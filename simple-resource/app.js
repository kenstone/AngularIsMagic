var app = angular.module('app', ['ngResource']);

app.factory('MenuService', ['$resource', function($resource) {
        return $resource('http://localhost:8088/cupcakes/:id');
    }]);

app.controller('MenuCtrl', ['$scope', 'MenuService', function($scope, MenuService) {

        var refresh = function() {
            $scope.cupcakes = MenuService.query();

        };

        $scope.refresh = function() {
            refresh();
        };

        $scope.addCupcake = function(newCupcake) {
            MenuService.save(angular.copy(newCupcake), function(s) {

               $scope.cupcakes.push(s);
                newCupcake.name = newCupcake.price = "";

            });
        };

        $scope.deleteCupcake = function(cupcake) {
            MenuService.delete(cupcake, function(s) {
               refresh();
            });
        };

       refresh();
    }]);